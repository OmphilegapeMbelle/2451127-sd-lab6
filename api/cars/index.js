//create cars api using express
module.exports = async function (context, req) {
    try {
        const { method, url, originalUrl, headers } = req;

        // Log the request details for debugging
        context.log('Request Method:', method);
        context.log('Request URL:', url);
        context.log('Original URL:', originalUrl);
        context.log('Request Headers:', headers);

        // Make a GET request to the specified URL
        const response = await axios.get(url);

        context.res = {
            status: response.status,
            body: response.data
        };
    } catch (error) {
        context.res = {
            status: error.response.status || 500,
            body: error.response.data || 'Internal Server Error'
        };
    }
    
}
