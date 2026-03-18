const express = require('express');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');
const logger = require('./utils/logger');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.use('/api', routes);

// Health
app.get('/', (req, res) => res.send({ status: 'ok', service: 'SmartShop Lite' }));

// Error handler
app.use(errorHandler);

module.exports = app;
