//create cars api using express
module.exports = async function (context, req) {
    const cars = require('./cars.json');
    const name = (req.query.name || (req.body && req.body.name));;
    let responseMessage;

    if (req.method === 'GET'){
        responseMessage = cars;

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: responseMessage
        };
    }

    if (req.method === 'POST'){
        const newCar = req.body;
        newCar.id = cars.length + 1;
        cars.push(newCar);
        responseMessage = cars;

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: responseMessage
        };
    }

    if (req.method === 'DELETE'){
        responseMessage = req.param;

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: responseMessage
        };
    }


    
}
