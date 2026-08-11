# eslint-config-angular

![](https://img.shields.io/npm/dt/@jkba/eslint-config-angular?logo=npm)

Opinionated ESLint (flat config) for Angular projects.

This package ships an ESLint [flat config](https://eslint.org/docs/latest/use/configure/configuration-files) and a matching Prettier config. It targets modern Angular (v22+) and covers TypeScript, Angular templates, RxJS, imports, and Prettier.

## Requirements

- ESLint `^9.21.0 || ^10`
- Angular `22.1+` (via `angular-eslint ^22.1.0`)
- TypeScript `>=4`
- ESM: the config is authored as an ES module, so your project must consume it from an `eslint.config.js`/`eslint.config.mjs` flat config file.

## Installation

Install the config together with its peer dependencies:

```sh
npm i -D \
  @jkba/eslint-config-angular \
  eslint \
  @eslint/js \
  typescript \
  typescript-eslint \
  angular-eslint \
  eslint-plugin-import-x \
  eslint-import-resolver-typescript \
  @smarttools/eslint-plugin-rxjs \
  eslint-plugin-unicorn \
  eslint-config-prettier \
  eslint-plugin-prettier \
  prettier
```

## Usage

Create an `eslint.config.js` at the root of your project and export the config:

```js
// eslint.config.js
import jkba from '@jkba/eslint-config-angular';

export default jkba;
```

The default export is a flat config array, so you can drop it straight in.

> **Type-checked rules:** this config enables `typescript-eslint`'s type-aware rules
> (`strictTypeChecked` / `stylisticTypeChecked`). Make sure ESLint can find your
> TypeScript project info — typically by adding `languageOptions.parserOptions.projectService: true`
> (or a `project` path) in your own config. See
> [Linting with Type Information](https://typescript-eslint.io/getting-started/typed-linting/).

### Prettier

Re-export the shared Prettier config from a `prettier.config.js`:

```js
// prettier.config.js
export { default } from '@jkba/eslint-config-angular/prettier.config';
```

In VS Code, enable Prettier as the default formatter in your `settings.json`:

```json
{
  "prettier.enable": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Modifying rules

Because the export is a flat config array, append your own config object(s) to add,
disable, or override rules. Use `defineConfig` from ESLint core to compose:

```js
// eslint.config.js
import { defineConfig } from 'eslint/config';
import jkba from '@jkba/eslint-config-angular';

export default defineConfig(
  jkba,
  {
    files: ['**/*.ts'],
    rules: {
      // Requires the `strictNullChecks` compiler option to function correctly.
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
    },
  },
  {
    files: ['**/*.html'],
    rules: {
      // Accessibility is not supported on this project.
      '@angular-eslint/template/click-events-have-key-events': 'off',
      '@angular-eslint/template/interactive-supports-focus': 'off',
      // i18n is not supported on this project.
      '@angular-eslint/template/i18n': 'off',
    },
  },
);
```

Config objects later in the array win, so your overrides always take precedence over
this package's defaults.

### Rules for apps

Some of the rules declared in this package are quite strict and might be considered more suitable for publishable libraries than applications. Applying such rules in application context probably won't bring any significant results in code quality thus may be considered ineffective.

Especially when using a structure like an Nx Workspace, it is possible to adjust the rules per library. In my use-cases, I tend to disable the following rules in purely feature (application) related libraries but keep them enabled in, for example, shared libraries.

- `@typescript-eslint/explicit-member-accessibility`
- `rxjs/no-exposed-subjects`
- `@angular-eslint/prefer-output-readonly`

## Contributing

To develop against a local project, run `npm link` here and then
`npm link @jkba/eslint-config-angular` in your project.

PRs are welcome, but keep in mind this is an opinionated configuration.

Reference [Share Configurations](https://eslint.org/docs/latest/extend/shareable-configs).

## Release

Use `npm version`, don't forget to push the tag (`git push --follow-tags`) and the CI will take care of the rest.

## License

This project is licensed under the [MIT License](http://opensource.org/licenses/MIT/).
For the full text of the license, see the [LICENSE](LICENSE) file.
