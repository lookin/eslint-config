module.exports = {
  rules: {
    /**
     * Ensure consistent use of file extension within the import path.
     * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
     */
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        mjs: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    /**
     * Forbid the use of extraneous packages.
     * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
     */
    'import/no-extraneous-dependencies': [
      'error',
      {
        bundledDependencies: false,
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],

    /**
     * Enforce a convention in module import order.
     * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
     */
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
          orderImportKind: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
  },
};
