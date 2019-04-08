import _config from './config'

const config = Object.assign({}, _config, _config[process.env.NODE_ENV || 'development'])

config.USER_API_ROOT = `${config.API_DOMAIN}/${config.USER_API_URI}`;

export default config
