const logger = require('../utils/logger');

function errorHandler(err, req, res, next) { // eslint-disable-line
  logger.error(err.message || 'Unhandled error');
  const status = err.status || 500;
  res.status(status).json({ error: err.message || 'Internal Server Error' });
}

module.exports = errorHandler;
