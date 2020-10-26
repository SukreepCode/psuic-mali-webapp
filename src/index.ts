import express from "express";

const logger = require('./config/logger');
const { port, env } = require('./config/vars');

const app = express(); // initialize the express server

// create a test route
app.get('/', (req, res, next) => {
    res.send('Hello world');
    // logger.info("test");
})

// Define the port to run the server. this could either be defined // in the environment variables or directly as shown below
app.listen(port || 4000, () => logger.info(`server started on port ${port} (${env})`));

logger.error("test error");