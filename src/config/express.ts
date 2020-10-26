import express from "express";

const app = express(); // initialize the express server

// create a test route
app.get('/', (req, res, next) => {
    res.send('Hello world');
});

module.exports = app;