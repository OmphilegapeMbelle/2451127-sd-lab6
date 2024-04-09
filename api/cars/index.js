module.exports = async function (context, req) {
    const express = require('express');
    const app = express();

    //console.log('Listening on 3000');
    app.use(express.json());

    const cars = require('./cars.json');
    const seeds = cars;
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function hgdtfgtee successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.log(cars);
    context.res = {
        body: responseMessage
    };
}
