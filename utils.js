const deps = require('./package.json').dependencies;
const env = process.env.NODE_ENV || 'development';

const getRemotes = (services) =>
  services
    .map((service) => ({
      ...service,
      ...(env === 'production' && { url: '/' }),
      ...(env === 'development' && { name: '' }),
    }))
    .map((service) => ({
      [service.component]: `${service.component}@${service.url}${service.name}/remoteEntry.js`,
    }));

const getSharedDeps = () => ({
  ...deps,
  react: {
    singleton: true,
    requiredVersion: deps.react,
  },
  'react-dom': {
    singleton: true,
    requiredVersion: deps['react-dom'],
  },
});

module.exports = {
  getRemotes,
  getSharedDeps,
};
