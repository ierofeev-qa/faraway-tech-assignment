import globals from "globals";
import tseslint from "typescript-eslint";


export default [
  {
    languageOptions: { globals: globals.browser }
  },
  {
    ignores: ['**/phantom/**', '**/allure-report/**', '**/allure-results/**']
  },
  {
    rules: {
      semi: "error",
    }},
  ...tseslint.configs.recommended,
];