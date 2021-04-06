'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require("dotenv").config();

// Esoteric Resources
const errorHandler = require('./error-handlers/500.js');
const authRoutes = require('./auth/routes.js');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');

// Prepare the express app
const app = express();

const PORT = process.env.PORT

const v1Routes = require('./routes/v1.js');

// App Level MW
app.use(cors());
app.use(morgan('dev'));
app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(authRoutes);

app.use('/api/v1', v1Routes);

// Catchalls
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log(`Server Up on ${PORT}`);
    });
  },
};
