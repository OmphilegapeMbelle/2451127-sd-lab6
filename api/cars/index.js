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
        newCar.id = cars.length;
        cars.push(newCar);
        responseMessage = cars;

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: responseMessage
        };
    }

    if (req.method === 'DELETE'){
        const id = req.body;
        const index = cars.findIndex(car => car.id === id);
        cars.splice(index, 1); //splice by id not index
        
        /*for (let i = 0;i<cars.length;i++){
            if(cars[i].id==0){
                continue;
            };
            
            if (cars[i].id>index){
                cars[i].id = cars[i].id - 1;
            };

            if (cars[i].id<=index){
                break;
            };
        };*/
        responseMessage = cars;
        console.log(index);

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: responseMessage
        };
    }


    
}
