/**
 * pack the web.
 */
module.exports = {
    entry: './assets/js/Application.js',
    output: {
        filename: './assets/js/build/app.js'
    },
    module: {
        loaders: [{
            test: /\.es6$|\.js$|\.jsx$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
        extensions: ['', '.js','.es6','.jsx']
    },
    query: {
        presets: ['es2015']
    }
};
