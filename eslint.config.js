// @ts-check

const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const importPlugin = require('eslint-plugin-import');

const config = tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    processor: angular.processInlineTemplates,
    extends: [
      eslint.configs.recommended,
      tseslint.configs.stylisticTypeChecked,
      tseslint.configs.strictTypeChecked,
      angular.configs.tsRecommended,
      // 'plugin:rxjs/recommended', // For some unknown weird reason, this plugin needs to be installed in child project as well.
      importPlugin.flatConfigs?.recommended,
      importPlugin.flatConfigs?.typescript,
    ],
    settings: {
      // Reference https://www.npmjs.com/package/eslint-plugin-import
      'import/resolver': {
        // You will also need to install and configure the TypeScript resolver
        // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
        'typescript': true,
        'node': true,
      }      
    }
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      '@angular-eslint/template/attributes-order': 'error',
      '@angular-eslint/template/no-inline-styles': 'warn', // For me, it is only a suggestion
      '@angular-eslint/template/conditional-complexity': [
        'error', { 'maxComplexity': 3 } // Max 3 is enough, create derived variable with proper naming
      ],
      '@angular-eslint/template/i18n': 'error',
      '@angular-eslint/template/no-any': 'error',
      '@angular-eslint/template/no-duplicate-attributes': 'error',
      '@angular-eslint/template/no-interpolation-in-attributes': 'error',
      '@angular-eslint/template/prefer-self-closing-tags': 'error',
      '@angular-eslint/template/use-track-by-function': 'error',
      '@angular-eslint/template/prefer-control-flow': 'error'
    },
  },
  // Prettier rule must always be the very last!
  // This rule might intentionally disable some rules declared above due to conflicts
  eslintPluginPrettierRecommended
);

module.exports = config;

// notes

// these two are not supported anymore
// "eslint-plugin-rxjs": ">=5",
// "eslint-plugin-rxjs-angular": ">=2",

// todo, test if we really need peer deps
