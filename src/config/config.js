switch (process.env.REACT_APP_ENV) {
case 'PRD':
    module.exports = require('./config.prd')
    break
case 'DEV':
    module.exports = require('./config.dev')
    break
default:
    module.exports = require('./config.local')
}
