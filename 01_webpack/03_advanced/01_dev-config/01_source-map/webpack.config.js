const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // mode: "development",
    mode: "production",
    // devtool: "cheap-module-source-map", // 生产环境不要配置devtool
    entry: "./app.js",
    output: { clean: true },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin()],
};
