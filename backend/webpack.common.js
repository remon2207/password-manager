const path = require('path')
const nodeExternals = require('webpack-node-externals')

const config = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  externalsPresets: {
    node: true
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.resolve(__dirname, './src')]
  },
  module: {
    rules: [
      {
        use: 'ts-loader',
        test: /\.ts$/
      }
    ]
  },
  externals: nodeExternals()
}

module.exports = config
