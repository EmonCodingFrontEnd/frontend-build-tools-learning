const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./app.js",
    plugins: [
        new HtmlWebpackPlugin({
            /* template: "./index.html", */
        }),
    ],
    externalsType: "script",
    externals: {
        // jquery: "jQuery", // 需要和index.html配合使用，其中index.html引入了jquery的CDN
        jquery: [
            "https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js",
            "$",
        ],
    },
};
