module.exports = {
    entry: './src/app.js',
    output: {
        path: './buld',
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                preset: ['es2015']
            }
        }]
    }
};