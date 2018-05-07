module.exports = {
    extends: 'airbnb',
    parser: 'babel-eslint',
    globals: {
      __DEV__: true,
    },
    env: {
      jest: true,
      browser: true,
    },
    plugins: ['prettier'],
    rules: {
      'no-alert': 0,
      'class-methods-use-this': 0,
      'import/prefer-default-export':0,
      'prefer-destructuring': ['error', { object: false, array: false }],
      'react/prefer-stateless-function':0,
      'react/forbid-prop-types': [2, { forbid: ['any'] }],
      'react/require-default-props': 0,
      'arrow-body-style': 0,
      'react/prop-types': [2, { ignore: ['navigation'], customValidators: [] }],
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    },
  };
  