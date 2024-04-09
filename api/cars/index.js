//create cars api using express
const axios = require('axios');

module.exports = async function (context, req) {
    try {
        const response = await axios.get('https://e08883b3-7e72-4f59-b2ca-fd1e00a32bae.azurewebsites.net/api/cars');
        const cars = response.data; // Assuming the API returns an array of cars

        context.res = {
            status: 200,
            body: cars
        };
    } catch (error) {
        context.res = {
            status: error.response.status || 500,
            body: error.response.data || 'Internal Server Error'
        };
    }
};
