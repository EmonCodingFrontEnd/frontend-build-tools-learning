module.exports = {
    // 默认值 ./dist/main.js
    output: {
        filename: "scripts/[name].js",
    },
    mode: "development",
    devtool: "inline-source-map", // 也可以选用 cheap-module-source-map
    devServer: {
        // static: "./dist", // 服务资源目录
        host: "localhost", // 启动服务器域名
        port: "3000", // 启动服务器端口号
        // open: true, // 是否自动打开浏览器
        open: ["/app.html"], // 打开指定页面
        hot: true, // 开启HMR（Webpack5默认开启）功能（只能用于开发环境，生产环境不需要了）
    },
};
