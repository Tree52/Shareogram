import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-config-prettier";
import svelte from "eslint-plugin-svelte";
import ts from "typescript-eslint";
import globals from "globals";
import js from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs["flat/recommended"],
  prettier,
  ...svelte.configs["flat/prettier"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
    files: ["**/*.svelte"],
  },
  {
    ignores: ["build/", ".svelte-kit/", "dist/"],
  },
  {
    rules: {
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowTernary: true,
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  perfectionist.configs["recommended-line-length"],
];
