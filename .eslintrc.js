module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-env"],
    },
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
