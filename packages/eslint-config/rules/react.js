module.exports = {
  extends: [
    /**
     * Turn off all rules that conflict with React 17.
     * @see https://github.com/jsx-eslint/eslint-plugin-react
     */
    'plugin:react/jsx-runtime',
  ],

  rules: {
    /**
     * Enforce a specific function type for function components.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
     */
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    /**
     * Restrict file extensions that may contain JSX.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
     */
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],

    /**
     * Enforce props alphabetical sorting.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
     */
    'react/jsx-sort-props': 'error',

    /**
     * Prevent missing props validation in a React component definition.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
     */
    'react/prop-types': 'off',

    /**
     * Enforce a defaultProps definition for every prop that is not a required prop.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
     */
    'react/require-default-props': 'off',
  },
};
