// TODO: Consider merging TS and HTML overrides to rules prop

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
        sourceType: 'module',
      },
      extends: [
        'eslint:recommended',
        // 'plugin:@typescript-eslint/stylistic', // TODO: Tohle zahodit
        // 'plugin:@typescript-eslint/stylistic-type-checked', // TODO: Tohle chci pouzit
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        // 'plugin:rxjs/recommended', // TODO: https://github.com/jmeinlschmidt/eslint-config-angular/issues/2
        'plugin:import/recommended',
        'plugin:import/typescript',
      ],
      plugins: ['@typescript-eslint', '@angular-eslint'], // TODO: Prettier
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
        
        '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }], // Ignore `Validators.required` etc.
        '@typescript-eslint/no-confusing-void-expression': 'off', // I just simply disagree with this rule
        '@typescript-eslint/explicit-member-accessibility': [
          'error', { 'overrides': { 'constructors': 'no-public' } }
        ],
        
        '@angular-eslint/sort-ngmodule-metadata-arrays': 'error',
        '@angular-eslint/prefer-on-push-component-change-detection': 'error',
        '@angular-eslint/use-component-view-encapsulation': 'warn', // For me, it is only a suggestion
        '@angular-eslint/prefer-output-readonly': 'error', // TODO: Not working (does nothing)
        '@angular-eslint/contextual-decorator': 'error',
        '@angular-eslint/component-max-inline-declarations': [ 'error', { 'template': 20 } ],
        '@angular-eslint/contextual-decorator': 'error',
        '@angular-eslint/no-attribute-decorator': 'error',
        '@angular-eslint/no-conflicting-lifecycle': 'error',
        '@angular-eslint/no-empty-lifecycle-method': 'error',
        '@angular-eslint/no-forward-ref': 'warn', // For me, it is only a suggestion
        '@angular-eslint/no-input-prefix': 'error',
        '@angular-eslint/no-lifecycle-call': 'error',
        '@angular-eslint/no-pipe-impure': 'error',
        '@angular-eslint/no-queries-metadata-property': 'error',
        '@angular-eslint/prefer-standalone-component': 'error',
        '@angular-eslint/relative-url-prefix': 'error',
        // '@angular-eslint/require-localize-metadata': 'error', // TODO: Error
        '@angular-eslint/use-component-selector': 'error',
        
        'no-warning-comments': [ 'error', { 'terms': ['todo', 'fixme'], 'location': 'anywhere' } ],
        'no-console': 'error',
      },
    },
    {
      files: [
        '*.html'
      ],
      parserOptions: {
        parser: '@angular-eslint/template-parser',
      },
      extends: [
        'plugin:@angular-eslint/template/accessibility',
        'plugin:@angular-eslint/template/recommended',
        // 'plugin:prettier/recommended', // TODO: https://github.com/jmeinlschmidt/eslint-config-angular/issues/3
      ],
      plugins: ['@angular-eslint/template'],
      rules: {
        // '@angular-eslint/template/attributes-order': 'error', // TODO: Bug present (https://github.com/angular-eslint/angular-eslint/issues/1456)
        '@angular-eslint/template/button-has-type': 'warn', // For me, it is only a suggestion
        '@angular-eslint/template/no-inline-styles': 'warn', // For me, it is only a suggestion
        '@angular-eslint/template/conditional-complexity': [
          'error', { 'maxComplexity': 3 } // Max 3 is enough, create derived variable with proper naming
        ],
        '@angular-eslint/template/i18n': 'error',
        '@angular-eslint/template/no-any': 'error',
        '@angular-eslint/template/no-call-expression': 'error',
        '@angular-eslint/template/no-duplicate-attributes': 'error',
        '@angular-eslint/template/no-interpolation-in-attributes': 'error',
        '@angular-eslint/template/prefer-self-closing-tags': 'error',
        '@angular-eslint/template/use-track-by-function': 'error'
      }
    },
  ],
}
