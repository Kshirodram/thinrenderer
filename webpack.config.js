var glob = require('glob'),
	webpack = require('webpack'),
	path = require('path'),
	WriteFileWebpackPlugin = require('write-file-webpack-plugin'),
	devServer = {
	    outputPath: path.join(__dirname, './dist'),    
	    colors: true,
	    quiet: false,
	    noInfo: false,
	    publicPath: '/static/',
	    historyApiFallback: true,
	    host: '127.0.0.1',
	    port: 8000,
	    hot: false
	};

module.exports = {
    // devtool: 'source-map',
    debug: false,
    devServer: devServer,    
    entry: glob.sync('./components/entry.js'),
    output: {
        path: devServer.outputPath,
        filename: '[name].js',
        publicPath: devServer.publicPath
    },
    plugins: [
        new WriteFileWebpackPlugin()
    ]
};