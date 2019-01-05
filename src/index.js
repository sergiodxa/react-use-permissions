import React from "react";

function usePermissions (name) {
  const [result, setResult] = React.useState(null);
  React.useEffect(
    () => {
      navigator.permissions
        .query({ name })
        .then(result => {
          if (result.state === "prompt")
            return navigator.permissions.request({ name });
          return result;
        })
        .then(result => {
          switch (result.state) {
            case "granted": {
              return setResult(true);
            }
            case "denied": {
              return setResult(false);
            }
          }
        });
    },
    [name]
  );
  return result;
}

export default usePermissions;
