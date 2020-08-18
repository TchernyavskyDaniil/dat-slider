// eslint-disable-next-line import/no-dynamic-require
module.exports = env =>
  require(`./config/webpack.config.${env.file}.js`)({ folder: env.folder, api: env.api });
