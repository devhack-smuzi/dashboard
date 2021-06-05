const deps = require('./package.json').dependencies;
const env = process.env.NODE_ENV || 'development';

// example of service
// {
//   url: 'http://localhost:3001/',
//   name: 'navigator',
// }

const services = [];

const getRemotes = () =>
  services
    .map((service) => ({
      ...service,
      ...(env === 'production' && { url: '/' }),
    }))
    .map((service) => `${service.url}${service.name}/remoteEntry.js`);

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
