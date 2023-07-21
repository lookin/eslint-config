module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],

      extends: [
        /**
         * Recommended rules for ESLint Plugin TypeScript.
         * @see https://typescript-eslint.io/linting/configs/#recommended-configurations
         */
        'plugin:@typescript-eslint/strict-type-checked',

        /**
         * TypeScript rules for `eslint-plugin-import`.
         * @see https://github.com/import-js/eslint-plugin-import#typescript
         */
        'plugin:import/typescript',
      ],

      /**
       * This setting is required to use rules which require type information.
       * @see https://typescript-eslint.io/packages/parser#project
       */
      parserOptions: {
        project: true,
      },

      rules: {
        /**
         * We must disable the base rule as it can report incorrect errors.
         * @see https://typescript-eslint.io/rules/no-shadow/
         */
        'no-shadow': 'off',
      },

      /**
       * TypeScript resolver for `eslint-plugin-import`.
       * @see https://github.com/import-js/eslint-import-resolver-typescript
       */
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
    },
  ],
};
