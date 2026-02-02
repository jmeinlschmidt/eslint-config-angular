// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import * as importPlugin from 'eslint-plugin-import';
import rxjs from '@smarttools/eslint-plugin-rxjs';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

const config = tseslint.config(
  {
    files: ['**/*.ts'],
    processor: angular.processInlineTemplates,
    extends: [
      eslint.configs.recommended,
      tseslint.configs.stylisticTypeChecked,
      tseslint.configs.strictTypeChecked,
      angular.configs.tsRecommended,
      // TODO
      // 'plugin:rxjs/recommended', // For some unknown weird reason, this plugin needs to be installed in child project as well.
      importPlugin.flatConfigs?.recommended,
      importPlugin.flatConfigs?.typescript,
    ],
    plugins: { rxjs },
    settings: {
      // Reference https://www.npmjs.com/package/eslint-plugin-import
      'import/resolver': {
        // You will also need to install and configure the TypeScript resolver
        // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
        typescript: true,
        node: true,
      },
    },
    rules: {
      'no-implicit-coercion': 'error',
      'no-self-compare': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable-loop': 'error',
      'default-case': 'warn',
      eqeqeq: 'error',
      'max-classes-per-file': 'error',
      'no-warning-comments': ['error', { terms: ['todo', 'fixme'], location: 'anywhere' }],
      'no-console': 'error',
      'prefer-template': 'error',
      'arrow-body-style': ['error', 'as-needed'],

      /**
       * Declaration sort is handled by import/order rule.
       * This rule handles order within {}-brackets only.
       */
      'sort-imports': ['error', { ignoreDeclarationSort: true }],

      /**
       * Handled by https://typescript-eslint.io/rules/no-unused-vars/
       * You must disable the base rule as it can report incorrect errors
       */
      'no-unused-vars': 'off',

      // Reference https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/finnish.md
      'rxjs/finnish': [
        'error',
        {
          functions: false,
          methods: false,
          names: {
            '^(canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate)$': false,
          },
          parameters: true,
          properties: true,
          strict: false,
          types: {
            '^EventEmitter$': false,
            '^Store$': false,
          },
          variables: true,
        },
      ],
      'rxjs/no-exposed-subjects': ['error', { allowProtected: true }],
      'rxjs/no-compat': 'error',
      'rxjs/throw-error': 'error',

      '@typescript-eslint/no-unused-vars': ['error', { args: 'after-used' }],
      '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }], // Ignore `Validators.required` etc.
      '@typescript-eslint/no-confusing-void-expression': 'off', // I just simply disagree with this rule
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        { overrides: { constructors: 'no-public' } },
      ],
      '@typescript-eslint/prefer-optional-chain': 'error',

      '@angular-eslint/no-input-rename': 'off', // I just simply disagree with this rule. Especially while using "transform" property.
      '@angular-eslint/prefer-on-push-component-change-detection': 'error',
      '@angular-eslint/use-component-view-encapsulation': 'warn', // For me, it is only a suggestion
      '@angular-eslint/prefer-output-readonly': 'error', // TODO: https://github.com/jmeinlschmidt/eslint-config-angular/issues/14
      '@angular-eslint/contextual-decorator': 'error',
      '@angular-eslint/component-max-inline-declarations': ['error', { template: 20 }],
      '@angular-eslint/no-attribute-decorator': 'error',
      '@angular-eslint/no-conflicting-lifecycle': 'error',
      '@angular-eslint/no-empty-lifecycle-method': 'error',
      '@angular-eslint/no-forward-ref': 'warn', // For me, it is only a suggestion
      '@angular-eslint/no-input-prefix': 'error',
      '@angular-eslint/no-lifecycle-call': 'error',
      '@angular-eslint/no-pipe-impure': 'error',
      '@angular-eslint/no-queries-metadata-property': 'error',
      '@angular-eslint/prefer-standalone': 'error',
      '@angular-eslint/prefer-signals': 'error',
      '@angular-eslint/relative-url-prefix': 'error',
      // '@angular-eslint/require-localize-metadata': 'error', // TODO: https://github.com/jmeinlschmidt/eslint-config-angular/issues/13
      '@angular-eslint/use-component-selector': 'error',
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'kebab-case', // I just don't really agree with using camelCase. Material isn't using it either.
        },
      ],

      'import/no-absolute-path': 'error',
      'import/newline-after-import': ['error', { count: 1 }],
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
      // 'import/no-deprecated': 'error', // Throws false-positive for RxJS,
      'import/no-self-import': 'error',
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {
      '@angular-eslint/template/attributes-order': 'error',
      '@angular-eslint/template/no-inline-styles': 'warn', // For me, it is only a suggestion
      '@angular-eslint/template/conditional-complexity': [
        'error',
        { maxComplexity: 3 }, // Max 3 is enough, create derived variable with proper naming
      ],
      '@angular-eslint/template/i18n': 'error',
      '@angular-eslint/template/no-any': 'error',
      '@angular-eslint/template/no-duplicate-attributes': 'error',
      '@angular-eslint/template/no-interpolation-in-attributes': 'error',
      '@angular-eslint/template/prefer-self-closing-tags': 'error',
      '@angular-eslint/template/use-track-by-function': 'error',
      '@angular-eslint/template/prefer-control-flow': 'error',
    },
  },
  {
    languageOptions: {
      globals: globals.builtin,
    },
    extends: [eslintPluginUnicorn.configs.recommended],
    rules: {
      'unicorn/prevent-abbreviations': 'off', // I just simply disagree with this rule
    },
  },

  // Prettier rule must always be the very last!
  // This rule might intentionally disable some rules declared above due to conflicts
  eslintPluginPrettierRecommended,
);

export default config;

// notes

// these two are not supported anymore
// "eslint-plugin-rxjs": ">=5",
// "eslint-plugin-rxjs-angular": ">=2",

// todo, test if we really need peer deps
