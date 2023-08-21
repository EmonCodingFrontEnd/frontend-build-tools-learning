module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    globals: {},
    extends: "airbnb-base",
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        // "space-before-function-paren": 0, // 在 function 定义左括号之前强制执行一致的间距
        // "array-bracket-spacing": 0, // 在数组括号内强制执行一致的间距
        quotes: ["error", "double"], // 强制一致使用反引号、双引号或单引号
        // "comma-dangle": 0, // 要求或禁止尾随逗号
        indent: ["error", 4], // 强制执行一致的缩进
        // semi: 0, // 0-关闭 1-警告 2-报错  要求或禁止使用分号而不是 ASI
        // "linebreak-style": ["error", "unix"], // 强制执行一致的换行样式
        "no-console": 0, // 禁止使用 console
    },
};
