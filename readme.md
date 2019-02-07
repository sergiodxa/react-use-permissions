# `react-use-permsissions`

> React Hook for the Permissions API

<a href="https://www.patreon.com/sergiodxa">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## Install

```sh
yarn add react-use-permissions
```

## Usage

```js
import usePermissions from '../src';

const format = hasPermissions => {
  switch (hasPermissions) {
    // User has granted permissions
    case true: {
      return "Permissions granted";
    }
    // User has denied permissions
    case false: {
      return "Permissions denied";
    }
    // User will be prompted for permissions
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
```
