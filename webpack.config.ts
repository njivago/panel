import path from 'path';
import type { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';
import type { BuildEnv, BuildPaths } from './config/webpack/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';

  const isDev = mode === 'development';

  const PORT = env.port || 3000;

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};