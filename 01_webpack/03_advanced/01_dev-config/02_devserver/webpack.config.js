const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    entry: "./app.js",
    output: { clean: true, publicPath: "/" },
    module: {},
    plugins: [new HtmlWebpackPlugin()],
    devServer: {
        static: path.resolve(__dirname, "./dist"), // 定义一个目录用于存放静态文件
        compress: true, // 启用gzip压缩
        host: "0.0.0.0",
        port: 3000,
        open: true, // 是否自动打开浏览器
        // open: ["/index.html"], // 打开指定页面
        headers: {
            "X-Access-Token": "abc123",
        },
        proxy: {
            // 访问 /api/** 接口时会被代理到 http://localhost:9000/api/**
            "/api": "http://localhost:9000",
        },
        // https: true, // 开启 https 但是没有证书
        http2: true, // 开启 https 包含默认证书
        historyApiFallback: true, // 访问到不存在的路径时降级兼容而不是报错，同时需要 output.publicPath='/'
    },
};
