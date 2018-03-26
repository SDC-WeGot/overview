const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

const common = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  context: SRC_DIR,
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        exclude: ['node_modules'],
        loader: 'babel-loader',      
        query: {
          presets: ['react', 'env']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CompressionPlugin({  
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
};

const client = {
  entry: SRC_DIR + '/client.js',
  output: {
    path: DIST_DIR,
    filename: 'app.js'
  }
};

const server = {
  entry: SRC_DIR + '/server.js',
  target: 'node',
  output: {
    path: DIST_DIR,
    filename: 'app-server.js',
    libraryTarget: 'commonjs-module'
  }
};

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server)
];

// module.exports = {
//   resolve: {
//     extensions: ['.js', '.jsx']
//   },
//   devtool: 'source-map',
//   entry: `${SRC_DIR}/index.jsx`,
//   output: {
//     path: DIST_DIR,
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   module : {
//     loaders : [
//       {
//         test: /\.jsx?/,
//         include: SRC_DIR,
//         exclude: ['node_modules'],
//         loader: 'babel-loader',      
//         query: {
//           presets: ['react', 'env']
//         }
//       },
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           'css-loader'
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': {
//         'NODE_ENV': JSON.stringify('production')
//       }
//     }),
//     new CompressionPlugin({  
//       asset: "[path].gz[query]",
//       algorithm: "gzip",
//       test: /\.js$|\.css$|\.html$/,
//       threshold: 10240,
//       minRatio: 0.8
//     })
//   ],
// };
