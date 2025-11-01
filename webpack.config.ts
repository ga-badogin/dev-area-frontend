import webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { IBuildEnv, IBuildPaths } from './config/build/types/config'
import path from 'path'

export default (env: IBuildEnv): webpack.Configuration => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'app', 'entrypoint', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales')
  }

  const port = env.port || 3000
  const mode = env.mode || 'development'

  const apiURL = env.apiURL || 'http://localhost:8000'
  const isDev = mode === 'development'
  const accessTokenKey = 'access-token'

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
    apiURL,
    accessTokenKey,
    project: 'frontend'
  })
}
