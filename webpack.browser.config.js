const path = require('path');

module.exports = {
    entry: './src/browser/handler.js',
    output: {
        path: path.join(__dirname, './'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
        ]
    }
};