var glob = require("glob");

module.exports = {
    entry: glob.sync('./src/**/*.ts'),
    output: {
        filename: 'app.js',
        path: __dirname + './dist'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [  {
            test: /\.ts$/,
            use: 'awesome-typescript-loader'
        }]
    },
    devServer: {
        port: 3000
    }
};