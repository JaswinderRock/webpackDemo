const webpack = require('webpack')
module.exports = {
    mode: 'develoment',
    devtool: 'cheap-module-source-map',
    Plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Jaswinder'),
        }),
    ],
}