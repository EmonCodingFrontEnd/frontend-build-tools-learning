const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "development",
    entry: {
        main: {
            dependOn: "lodash",
            import: ["./src/app.js", "./src/app2.js"],
            filename: "channel1/[name].js",
        },
        main2: {
            dependOn: "lodash",
            import: ["./src/app3.js"],
            filename: "channel2/[name].js",
        },
        lodash: {
            import: "lodash",
            filename: "common/[name].js",
        },
    },
    output: { clean: true },
    plugins: [
        new HtmlWebpackPlugin({
            title: "多页面应用1",
            template: "./index.html",
            inject: "body",
            filename: "channel1/index.html",
            chunks: ["main", "lodash"],
            publicPath: "http://www.a.com",
        }),
        new HtmlWebpackPlugin({
            title: "多页面应用2",
            template: "./index2.html",
            inject: "body",
            filename: "channel2/index2.html",
            chunks: ["main2", "lodash"],
            publicPath: "http://www.b.com",
        }),
    ],
};
