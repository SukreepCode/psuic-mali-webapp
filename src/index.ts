import express from "express";

const logger = require('./config/logger');
const { port, env } = require('./config/vars');

const app = express(); // initialize the express server

// create a test route
app.get('/', (req, res, next) => {
    res.send('Hello world');
});

// Define the port to run the server.
app.listen(port || 4000, () => logger.info(`server started on port ${port} (${env})`));

