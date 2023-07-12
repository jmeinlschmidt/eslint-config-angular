module.exports = {
  overrides: [
    {
      files: [
        '*.ts'
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2019,
        project: true,
        project: 'tsconfig.json',
        sourceType: "module",
      },
      extends: [
        'eslint:recommended',
        // 'plugin:@typescript-eslint/stylistic', // TODO: Tohle zahodit
        // 'plugin:@typescript-eslint/stylistic-type-checked', // TODO: Tohle chci pouzit
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@angular-eslint/recommended',
        // 'plugin:rxjs/recommended', // TODO: https://github.com/jmeinlschmidt/eslint-config-angular/issues/2
        'plugin:import/recommended',
        'plugin:import/typescript',
      ],
      plugins: ['@typescript-eslint'],
      settings: {
        // Reference https://www.npmjs.com/package/eslint-plugin-import
        'import/resolver': {
          // You will also need to install and configure the TypeScript resolver
          // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
          'typescript': true,
          'node': true,
        }
      },
      rules: {
        // 'rxjs-angular/prefer-async-pipe': 'error', // TODO: https://github.com/jmeinlschmidt/eslint-config-angular/issues/2
        // 'rxjs-angular/prefer-composition': 'error', // TODO: https://github.com/jmeinlschmidt/eslint-config-angular/issues/2
        // 'rxjs-angular/prefer-takeuntil': 'error', // TODO: https://github.com/jmeinlschmidt/eslint-config-angular/issues/2

        // Ignore `Validators.required` etc.
        '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
        "no-warning-comments": [ 'error', { "terms": ["todo", "fixme"], "location": "anywhere" } ],
      },
    },
    {
      files: [
        '*.html'
      ],
      extends: [
        'plugin:@angular-eslint/template/accessibility',
        'plugin:@angular-eslint/template/recommended',
        // 'plugin:prettier/recommended', // TODO: https://github.com/jmeinlschmidt/eslint-config-angular/issues/3
      ],
    },
  ],
}
