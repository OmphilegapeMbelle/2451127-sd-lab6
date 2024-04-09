//create cars api using express
module.exports = async function (context, req) {
    const name = (req.query.name || (req.body && req.body.name));;
    const responseMessage = req;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

    const express = require('express');
    const app = express();

    //console.log('Listening on 3000');
    app.use(express.json());
    const cars = require('./cars.json');
}
