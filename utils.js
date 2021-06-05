const deps = require('./package.json').dependencies;

// имена сервисов, которые должны подтянуться как зависимость
const getRemotes = (services) =>
  services.reduce((remotes, sname) => {
    // url сервиса - например, либо "/payments/", либо process.env.payments_service_url
    let serviceUrl = process.env[`${sname}_service_url`] || '/'.concat(sname);
    // на всякий случай убираем слэш в конце
    serviceUrl = serviceUrl.replace(/\/$/, '');
    // например, "payments@/payments/remoteEntry.js"
    const entryUrl = `${sname}@${serviceUrl}/remoteEntry.js`;
    return { ...remotes, [sname]: entryUrl };
  }, {});

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
