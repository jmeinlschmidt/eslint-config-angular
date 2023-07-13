# eslint-config-angular

> :warning: This package is not yet released!

Opinionated ESLint config for Angular projects


## Installation

For some unknown weird reason, following dependencies have to be installed in your project as well. (https://github.com/jmeinlschmidt/eslint-config-angular/issues/5)

```sh
npm i -D eslint-plugin-rxjs eslint-plugin-rxjs-angular
```

```sh
npm i -D @jkba/eslint-config-angular
```


## Usage

Extend your eslint configuration with `"@jkba/angular"`:

```javascript
// .eslintrc.json

{
  "extends": [ "@jkba/angular" ]
}
```

Create prettier configuration file:

```javascript
// prettier.config.js

module.exports = require('@jkba/eslint-config-angular/prettier.config');
```


### Modifying rules

> :warning: Work in Progress


## Build

> :warning: Work in Progress

Refer to https://eslint.org/docs/latest/extend/shareable-configs.


## License

This project is licensed under [MIT License](http://opensource.org/licenses/MIT/).
For the full text of the license, see the [LICENSE](LICENSE) file.
