const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // mode: "development",
    mode: "production",
    // devtool: "inline-source-map",
    entry: "./src/app.js",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({})],
    optimization: {
        usedExports: true,
    },
};
