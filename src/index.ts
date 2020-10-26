// Promise = require('bluebird'); 
const logger = require('./config/logger');
const { port, env } = require('./config/vars');
const app = require('./config/express');

// Define the port to run the server.
app.listen(port || 4000, () => logger.info(`server started on port ${port} (${env})`));

/**
* Exports express
* @public
*/
module.exports = app;
