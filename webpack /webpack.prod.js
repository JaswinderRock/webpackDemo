const webpack = require('webpack')

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    Plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Kaur'),
        }),
    ],
}