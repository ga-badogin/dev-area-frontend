import webpack from 'webpack'
import { IBuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: IBuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  config.resolve!.modules!.push(paths.src)
  config.resolve!.extensions!.push('.ts', '.tsx')
  config.resolve!.alias = {
    ...config.resolve!.alias,
    '@': paths.src
  }

  const rules = config.module!.rules as webpack.RuleSetRule[]
  config.module!.rules = rules.map((rule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }

    return rule
  })
  config.module!.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })
  config.module!.rules.push(buildCssLoader(true))

  config.plugins!.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API_URL__: JSON.stringify(''),
      __PROJECT__: JSON.stringify('storybook')
    })
  )

  return config
}
