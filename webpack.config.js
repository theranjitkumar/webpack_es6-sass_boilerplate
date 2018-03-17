const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
    entry: ["./src/index.js"],
    output: {
        filename: "./assets/js/main.js",
        path: path.join(__dirname, "./build/")
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: [{ loader: "html-loader", options: { minimize: false } }]
        }]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html"
        })
    ]
};