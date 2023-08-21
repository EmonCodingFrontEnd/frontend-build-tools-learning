// const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader", "eslint-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            /* template: "./index.html"  */
        }),
    ],
    devServer: {
        open: true,
        client: {
            overlay: false, // 通过浏览器访问时，如果碰到错误不要显示遮罩层
        },
    },
};
