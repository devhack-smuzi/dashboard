const deps = require('./package.json').dependencies;
const env = process.env.NODE_ENV || 'development';

// TODO: it work with 'mf1Main@/mf1main/remoteEntry.js' realative path after @?
const getRemotes = (services) =>
  services
    .map((service) => ({
      ...service,
      ...(env === 'production' && { url: '/' }),
      ...(env === 'development' && { endpoint: '' }),
    }))
    .reduce(
      (acc, curr) => ({
        ...acc,
        [curr.name]: `${curr.name}@${curr.url}${curr.endpoint}/remoteEntry.js`,
      }),
      {}
    );

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

const getEnv = () => env;

module.exports = {
  getEnv,
  getRemotes,
  getSharedDeps,
};
