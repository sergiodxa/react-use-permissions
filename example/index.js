import React from 'react';
import { render } from 'react-dom';
import usePermissions from '../src';

const format = hasPermissions => {
  switch (hasPermissions) {
    case true: {
      return "Permissions granted";
    }
    case false: {
      return "Permissions denied";
    }
    case null: {
      return "Asking for permissions";
    }
  }
}

function App() {
  const hasPermissions = usePermissions("geolocation");
  const content = format(hasPermissions);
  return <h1>{content}</h1>;
}

render(<App />, window.root);
