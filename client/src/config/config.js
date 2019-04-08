const defaultConfig = {
  API_DOMAIN: process.env.REACT_APP_API_DOMAIN || 'localhost',
  USER_API_URI: 'user/api/v0',
}

const production = {}
const development = {
  API_PORT: 5001,
}
const test = {}

export default {
  ...defaultConfig,
  production,
  development,
  test,
}
