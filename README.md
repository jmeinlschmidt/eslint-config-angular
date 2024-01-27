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

```js
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


### Enable Prettier

In VSCode, add the following lines to your `settings.json`

```json
{
  "prettier.enable": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### Modifying rules

Modify (add/disable/override) specific rules via the `rules` property:

```js
// .eslintrc.json

{
  "extends": [ "@jkba/angular" ],
  "rules": {
    "@typescript-eslint/prefer-nullish-coalescing": "off", // Requires the `strictNullChecks` compiler option to be turned on to function correctly.
    "@typescript-eslint/no-unnecessary-condition": "off", // Requires the `strictNullChecks` compiler option to be turned on to function correctly.
    "@angular-eslint/template/click-events-have-key-events": "off", // Accessibility is not supported on this project
    "@angular-eslint/template/interactive-supports-focus": "off", // Accessibility is not supported on this project
  }
}
```

or using the `overrides` property:

```js
// .eslintrc.json

{
  "extends": [ "@jkba/angular" ],
  "overrides": [
    {
      "files": [ "*.html" ],
      "parserOptions": { "parser": "@angular-eslint/template-parser" },
      "rules": {
        "@angular-eslint/template/i18n": "off" // i18n is not supported on this project
      }
    }
  ]
}
```

Reference [Overriding Settings from Shareable Configs](https://eslint.org/docs/latest/extend/shareable-configs#overriding-settings-from-shareable-configs).


### Rules for apps

Some of the rules declared in this package are quite strict and might be considered more suitable for publishable libraries than applications. Applying such rules in application context probably won't bring any significant results in code quality thus may be considered ineffective.

Especially when using structure like Nx Workspace, it is possible to adjust the rules per library. In my use-cases, I tend to disable the following rules in purely feature (application) related libraries but keep them enabled in, for example, shared libraries.

- `@typescript-eslint/explicit-member-accessibility`
- `rxjs/no-exposed-subjects`
- `@angular-eslint/prefer-output-readonly`


## Build

Use `npm link` and then `npm link @jkba/eslint-config-angular` in your project.
PRs are welcome but keep in mind this is an opinionated configuration. 

Reference [Share Configurations](https://eslint.org/docs/latest/extend/shareable-configs).


## Release

Use `npm version`, don't forget to push the tag and the CI will take care of the rest.


## License

This project is licensed under [MIT License](http://opensource.org/licenses/MIT/).
For the full text of the license, see the [LICENSE](LICENSE) file.
