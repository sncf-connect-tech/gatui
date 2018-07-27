// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: "module"
  },
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "airbnb-base",
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    "vue",
    "filenames",
    "import",
    "promise"
  ],
  settings: {
    "import/resolver": {
      "webpack": {
        "config": "./build/webpack.base.conf.js"
      }
    }
  },
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "promise/catch-or-return": "error",
    "semi": ["error", "always"],
    "comma-dangle": ["error", "never"],
    "arrow-body-style": ["error", "as-needed"],
    "no-param-reassign": ["error", { "props": false }],
    "vue/html-self-closing": [
      "error",
      {
        "html": {
          "void": "always",
          "normal": "never",
          "component": "always"
        },
        "svg": "always",
        "math": "always"
      }
    ]

  }
}
