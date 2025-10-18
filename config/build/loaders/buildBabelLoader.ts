import {IBuildOptions} from '../types/config'
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'

interface IBuildBabelLoaderProps extends IBuildOptions {
	isTSX?: boolean
}

export function buildBabelLoader({isDev, isTSX}: IBuildBabelLoaderProps) {
	const isProd = !isDev
	
	return {
		test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				cacheDirectory: true,
				presets: ['@babel/preset-env'],
				plugins: [
					[
						"@babel/plugin-transform-typescript",
						{
							isTSX
						}
					],
					isTSX && isProd && [
						babelRemovePropsPlugin,
						{
							props: ['data-testid']
						}
					],
					'@babel/plugin-transform-runtime',
					isDev && require.resolve('react-refresh/babel')
				].filter(Boolean),
			},
		},
	}
}