const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // 默认值 ./src/index.js
    entry: "./src/index.js",
    // 默认值 ./dist/main.js
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
        assetModuleFilename: "images/[contenthash][ext]",
    },
    // 加载器
    module: {
        rules: [
            {
                test: /\.png$/,
                type: "asset/resource",
                generator: {
                    // 会覆盖 assetModuleFilename 的配置
                    filename: "images/[contenthash][ext]",
                },
            },
            {
                test: /\.svg$/,
                type: "asset/inline",
            },
            {
                test: /\.txt$/,
                type: "asset/source",
            },
            {
                test: /\.jpg$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 * 1024,
                    },
                },
            },
        ],
    },
    plugins: [
        // 默认值 ./dist/index.html
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "app.html",
            inject: "body",
        }),
    ],
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: "./dist", // 服务资源目录
        host: "localhost", // 启动服务器域名
        port: "3000", // 启动服务器端口号
        // open: true, // 是否自动打开浏览器
        open: ["/app.html"], // 打开指定页面
        hot: true, // 开启HMR（Webpack5默认开启）功能（只能用于开发环境，生产环境不需要了）
    },
};
