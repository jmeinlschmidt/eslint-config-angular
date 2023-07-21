# eslint-config-angular

![](https://img.shields.io/npm/dt/@jkba/eslint-config-angular?logo=npm)


Opinionated ESLint config for Angular projects


## Installation

```sh
npm i -D \
  prettier \
  @angular-eslint/eslint-plugin \
  @angular-eslint/eslint-plugin-template \
  @angular-eslint/template-parser \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint-plugin-import \
  eslint-config-prettier \
  eslint-plugin-prettier \
  eslint-plugin-rxjs \
  eslint-plugin-rxjs-angular \
  eslint-import-resolver-typescript \
  @jkba/eslint-config-angular

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
