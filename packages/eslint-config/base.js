module.exports = {
  extends: [
    /**
     * Airbnb's base JavaScript rules.
     * @see https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
     */
    'airbnb-base',

    ...[
      './rules/eslint-comments',
      './rules/import',
      './rules/prettier',
      './rules/promise',
      './rules/typescript',
    ].map(require.resolve),
  ],
};
