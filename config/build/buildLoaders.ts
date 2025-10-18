import webpack from 'webpack'
import {IBuildOptions} from './types/config'
import {buildCssLoader} from './loaders/buildCssLoader'
import {buildBabelLoader} from './loaders/buildBabelLoader'

export function buildLoaders(options: IBuildOptions): webpack.RuleSetRule[] {
	const codeBabelLoader = buildBabelLoader({...options, isTSX: false})
	const tsxCodeBabelLoader = buildBabelLoader({...options, isTSX: true})

  const cssLoader = buildCssLoader(options.isDev)

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }
	
  return [codeBabelLoader, tsxCodeBabelLoader, cssLoader, svgLoader, fileLoader]
}
