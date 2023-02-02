module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["plugin:vue/essential", "standard", "plugin:storybook/recommended"],
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "plugins": ["vue", "@typescript-eslint"],
  "rules": {}
};