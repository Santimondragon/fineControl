const ErrorOverlayPlugin = require('error-overlay-webpack-plugin'),
      history = require('connect-history-api-fallback'),
      convert = require('koa-connect');

module.exports = {
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public/assets/dist',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },

  devtool: 'source-map',

  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      { 
        test: /\.json$/,
        loader: 'json-loader'
      },
      { 
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },

  plugins: [new ErrorOverlayPlugin()]
};

module.exports.serve = {
  content: ['public'],
  add: (app, middleware, options) => {
    app.use(convert(history()));
  },
  open: true,
  dev: {
    publicPath: "/assets/dist/"
  }
};