const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxWebpackPluugin = require("workbox-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./index.js",
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: ["style-loader", "css-loader"],
    //         },
    //     ],
    // },
    plugins: [
        new HtmlWebpackPlugin({}),
        new WorkboxWebpackPluugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
        }),
    ],
    devServer: {
        devMiddleware: {
            writeToDisk: true,
        },
    },
    // optimization: {
    //     usedExports: true,
    // },
};
