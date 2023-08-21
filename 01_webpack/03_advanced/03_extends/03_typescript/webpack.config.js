const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/app.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node-modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            /* template: "./index.html", */
        }),
    ],
    resolve: { extensions: [".ts", ".js"] },
};
