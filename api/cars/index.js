//create cars api using express
module.exports = async function (context, req) {
    const name = (req.query.name || (req.body && req.body.name));;
    const responseMessage = req;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

    app.get('https://8ff60c99-b92a-43d1-a3db-ce56ca93a489.azurewebsites.net/api/cars', (req, res) => {
        res.send(cars);
    });
}
