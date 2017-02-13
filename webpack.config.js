const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/drappointment.jsx',
  output: {
    path: path.join(__dirname, 'api', 'static', 'api', 'bundles'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-maps',
};
