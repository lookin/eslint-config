module.exports = {
  extends: [
    /**
     * Airbnb's React and React Hooks rules.
     * @see https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
     */
    'airbnb',
    'airbnb/hooks',

    ...[
      './rules/eslint-comments',
      './rules/import',
      './rules/prettier',
      './rules/promise',
      './rules/react',
      './rules/typescript',
    ].map(require.resolve),
  ],
};
