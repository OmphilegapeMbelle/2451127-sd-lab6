//create cars api using express
const express = require('express');
const app = express();

//console.log('Listening on 3000');
app.use(express.json());

const cars = require('./cars.json');

//get all cars
app.get('/cars', (req, res) => {
    res.send(cars);
});

//get car by id
app.get('/cars/:id', (req, res) => {
    const id = req.params.id;
    const car = cars[req.params.id];
    res.send(car);
});

//update car
app.put('/cars/:id', (req, res) => {
    const id = req.params.id;
    const updatedCar = req.body;
    const index = cars.findIndex(car => car.id === id);
    cars[req.params.id] = updatedCar;

    res.send(updatedCar);
});

//delete car
app.delete('/cars/:id', (req, res) => {
    const id = req.params.id;
    const index = cars.findIndex(car => car.id === id);
    cars.splice(index, 1);
    res.json({ message: `Car with id ${id} deleted` });
});

//add car
app.post('/cars', (req, res) => {

    const newCar = req.body;
    newCar.id = cars.length + 1;
    console.log(newCar);
    cars.push(newCar);
    res.json(newCar);
});

//start app at localhost:3001
app.listen(3000, () => {
    console.log('Server started at https://mango-desert-0addf3403.5.azurestaticapps.net/api');
});