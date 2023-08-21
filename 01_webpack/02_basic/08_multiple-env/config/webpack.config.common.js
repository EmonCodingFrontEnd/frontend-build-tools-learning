const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const toml = require("toml");
const yaml = require("yaml");
const json5 = require("json5");

// 获取处理样式的Loaders
const getCSSLoaders = (preProcessor) => {
    return [
        MiniCssExtractPlugin.loader,
        "css-loader",
        {
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    plugins: [
                        "postcss-preset-env", // 能解决大多数样式兼容性问题
                    ],
                },
            },
        },
        preProcessor,
    ].filter(Boolean);
};

module.exports = {
    // 默认值 ./src/index.js
    entry: {
        index: "./src/index.js",
        another: "./src/another-module.js",
    },
    // 默认值 ./dist/main.js
    output: {
        path: path.resolve(__dirname, "../dist"),
        // filename: "scripts/[name].[contenthash].js",
        clean: true,
        assetModuleFilename: "images/[contenthash][ext]",
        // publicPath: "http://localhost:8080/",
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
            {
                test: /\.(css|less)$/,
                use: getCSSLoaders("less-loader"), // 从后往前调用loader
            },
            {
                test: /\.s[ac]ss$/,
                use: getCSSLoaders("sass-loader"), // 从后往前调用loader
            },
            {
                test: /\.styl$/,
                use: getCSSLoaders("stylus-loader"), // 从后往前调用loader
            },
            {
                test: /\.(woff?|eot|ttf|otf)$/,
                type: "asset/resource",
            },
            {
                test: /\.(csv|tsv)$/,
                use: "csv-loader",
            },
            {
                test: /\.xml$/,
                use: "xml-loader",
            },
            {
                test: /\.toml$/,
                type: "json",
                parser: {
                    parse: toml.parse,
                },
            },
            {
                test: /\.yaml$/,
                type: "json",
                parser: {
                    parse: yaml.parse,
                },
            },
            {
                test: /\.json5$/,
                type: "json",
                parser: {
                    parse: json5.parse,
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [["@babel/plugin-transform-runtime"]],
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
        // 抽离CSS
        new MiniCssExtractPlugin({
            // 定义输出文件名和目录
            filename: "styles/[contenthash].css",
        }),
    ],
    optimization: {
        // minimizer: [
        //     // 压缩CSS
        //     new CssMinimizerWebpackPlugin({}),
        //     // 压缩JS
        //     new TerserWebpackPlugin(),
        // ],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
    },
    // mode: env.production ? "production" : "development",
    // devtool: "inline-source-map",
    // devServer: {
    //     // static: "./dist", // 服务资源目录
    //     host: "localhost", // 启动服务器域名
    //     port: "3000", // 启动服务器端口号
    //     // open: true, // 是否自动打开浏览器
    //     open: ["/app.html"], // 打开指定页面
    //     hot: true, // 开启HMR（Webpack5默认开启）功能（只能用于开发环境，生产环境不需要了）
    // },
};