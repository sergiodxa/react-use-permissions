# `react-use-permsissions`

> React hook for Permissions API

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.8 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

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
