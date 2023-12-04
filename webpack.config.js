const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './0 script/script.js',
    output: {
        path: path.resolve(__dirname, './modules'),
        filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin()]
};