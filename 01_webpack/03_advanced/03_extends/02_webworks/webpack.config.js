const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    plugins: [
        new HtmlWebpackPlugin({
            /* template: "./index.html", */
        }),
    ],
};
