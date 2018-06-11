const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const glob = require('glob')
const fs = require('fs')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist')
}

const commonConfig = {
  output: {
    filename: 'js/[name].js?[chunkhash:4]',
    path: PATHS.build,
    publicPath: ''
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: PATHS.app
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {}
      }
    ]
  }
}

const developmentConfig = {
  devServer: {
    stats: 'errors-only'
  },

  devtool: 'cheap-module-eval-source-map',

  module: {
    rules: []
  }
}

const productionConfig = {
  optimization: {
    minimizer: []
  },

  module: {
    rules: []
  },

  plugins: [
    new CleanWebpackPlugin([PATHS.build])
  ]
}

module.exports = (mode) => {
  const jsEntryList = glob.sync(`${PATHS.app}/**/*.js`, {
    nodir: true
  })

  const pages = jsEntryList.map(js => {
    const jsPath = path.parse(js)
    const name = jsPath.name
    const htmlFilePath = `${jsPath.dir}/${name}.html`

    try {
      fs.accessSync(htmlFilePath)

      return {
        entry: {
          [name]: js
        },
        plugins: [
          new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: htmlFilePath
          })
        ]
      }
    } catch (err) {
      return {
        entry: {
          [name]: js
        },
        plugins: [
          new HtmlWebpackPlugin({
            filename: `${name}.html`
          })
        ]
      }
    }
  })

  const config = mode === 'production' ? productionConfig : developmentConfig

  return pages.map(page => merge(commonConfig, config, page, {
    mode
  }))
}
