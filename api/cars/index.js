module.exports = async function (context, req) {
    const express = require('express');
    const app = express();

    //console.log('Listening on 3000');
    app.use(express.json());

    const cars = require('./cars.json');
    const seeds = cars;

    context.log('JavaScript HTTP trigger function processed a request.');
    context.res = {
        body: seeds
    };
}
