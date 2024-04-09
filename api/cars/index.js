//create cars api using express
module.exports = async function (context, req) {
    const cars = require('./cars.json');
    const name = (req.query.name || (req.body && req.body.name));;
    const responseMessage = cars;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

    
}
