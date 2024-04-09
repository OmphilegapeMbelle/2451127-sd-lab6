//create cars api using express
module.exports = async function (context, req) {
    const cars = require('./cars.json');
    const name = (req.query.name || (req.body && req.body.name));;

    if (req.url === 'https://2992a9f0-a1b2-4df8-b9e6-19f659867cd2.azurewebsites.net/api/cars' && req.method === 'GET'){
        const responseMessage = cars;
    }

    if (req.url === 'https://2992a9f0-a1b2-4df8-b9e6-19f659867cd2.azurewebsites.net/api/cars/:id' && req.method === 'GET'){
        const responseMessage = car;
    }

    /*if (req.url === 'https://2992a9f0-a1b2-4df8-b9e6-19f659867cd2.azurewebsites.net/api/cars'){
        const responseMessage = cars;
    }*/

    //const responseMessage = cars;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

    
}
