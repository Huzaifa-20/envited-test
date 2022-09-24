// Path: /.eslintrc.js

module.exports = {
  extends: ['react-app', 'airbnb'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'arrow-body-style': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'operator-linebreak': 'off',
    // You can override any rules you want
  },
};
