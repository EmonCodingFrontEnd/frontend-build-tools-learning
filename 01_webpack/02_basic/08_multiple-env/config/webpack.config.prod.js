const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = {
    // 默认值 ./dist/main.js
    output: {
        filename: "scripts/[name].[contenthash].js",
        publicPath: "http://localhost:8080/",
    },
    optimization: {
        minimizer: [
            // 压缩CSS
            new CssMinimizerWebpackPlugin({}),
            // 压缩JS
            new TerserWebpackPlugin(),
        ],
    },
    mode: "production",
    devtool: "source-map",
    // 解决生产环境下编译提示：The following asset(s) exceed the recommended size limit (244 KiB)
    performance: {
        hints: false,
    },
};
