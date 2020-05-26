module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "generator-star-spacing": "off",
    "no-nuused-vars": "off",
    "quotes": "off",
    "eol-last": 0,
    "space-before-function-paren": 0,
    "tab_size": 4,
  },
};
