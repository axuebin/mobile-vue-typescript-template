var path = require('path');
module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended"
  ],
  plugins: [
    "vue",
    "@typescript-eslint"
  ],
  globals: {
    "use": "error",
    "window": "error",
    "document": true
  },
  rules: {
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/indent": ["error", 4],
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/explicit-member-accessibility": 0,
    "vue/html-indent": ["error", 4],
    "vue/html-indent": "off",
    "vue/max-attributes-per-line": "off",
    "camelcase": "off",
    "arrow-parens": ["error", "as-needed"],
    "import/extensions": "off",
    "lines-between-class-members": "off",
    "indent": ["error", 4],
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "import/newline-after-import": "off",
    "global-require": "off",
    "prefer-template": "off",
    "max-len": ["error", 200],
    "no-console":  "off",
    "no-debugger": "warn",
    "newline-per-chained-call": "off",
    "object-curly-newline": "off",
    "no-param-reassign": "off",
    "no-restricted-syntax": [
      "error",
      "LabeledStatement",
      "WithStatement"
    ],
    "no-underscore-dangle": "off",
    "import/no-unresolved": [
      "error",
      {
        "ignore": ['components/']
      }
    ]
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, './compile/webpack.dev.js')
      }
    }
  }
};
