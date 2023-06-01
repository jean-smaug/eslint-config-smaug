/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["xo-react", "plugin:storybook/recommended", "./index.js"],
  plugins: ["react-refresh"],
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
  rules: {
    "react-refresh/only-export-components": "warn",

    // TODO: restore these rules
    "react/boolean-prop-naming": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "off",
    "react/no-danger": "off",
    "react/jsx-no-useless-fragment": "off",
    "react/jsx-indent": "off",
    "react/jsx-tag-spacing": "off",
    "react/hook-use-state": "off",
    "react/display-name": "off",
    "react/jsx-indent-props": "off",
  },
};
