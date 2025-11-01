import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import {IBuildOptions} from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

export function buildPlugins({
  paths,
  isDev,
  apiURL,
  project,
  accessTokenKey
}: IBuildOptions): webpack.WebpackPluginInstance[] {
  const isProd = !isDev

  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API_URL__: JSON.stringify(apiURL),
      __PROJECT__: JSON.stringify(project),
      __ACCESS_TOKEN_KEY__: JSON.stringify(accessTokenKey)
    }),
	  new ForkTsCheckerWebpackPlugin({
		  typescript: {
			  diagnosticOptions: {
				  semantic: true,
				  syntactic: true,
			  },
			  mode: 'write-references',
		  },
	  }),
  ]

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin())
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }))
	  plugins.push(new CircularDependencyPlugin({
		  exclude: /node_modules/,
		  failOnError: true
	  }))
  }

  if(isProd) {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css',
    }))
    plugins.push(new CopyPlugin({
      patterns: [{ from: paths.locales, to: paths.buildLocales }],
    }))
  }

  return plugins
}
