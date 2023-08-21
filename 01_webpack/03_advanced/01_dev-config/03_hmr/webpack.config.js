const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    entry: "./app.js",
    output: { clean: true },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
    devServer: {
        /**
         * Webpack5默认开启，适用于开发环境！
         * 模块热替换（HMR-Hot Module Replacement）功能会在应用程序运行过程中，替换、添加或删除模块，
         * 而无需重新加载整个页面。
         * 如果配置了style-loader，那么现在已经同样支持样式文件的热替换功能了。因为style-loader的实现使用了module.hot.accept
         */
        hot: true,
        /**
         * 热加载（文件更新时，自动刷新我们的服务和页面）新版的webpack-dev-server默认已经开启了热加载的功能。
         * 注意：如果想要关掉它，要将liveReload设置为false的同时，也要关掉hot。
         */
        liveReload: true,
    },
};
