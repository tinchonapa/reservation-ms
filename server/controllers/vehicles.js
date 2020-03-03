const model = require('../models/vehicle');

const postVehicle = (req, res, next) => {
    model.createVehicle(req.body)
        .then(data => {
            res.status(200).json({});
        })
        .catch(error =>  {
            console.log(error);
            res.status(400).send(error);
        });
}

const getVehicle = (req, res, next) => {
    model.showVehicle()
        .then(vehicles => {
            res.status(200).json(vehicles)
        })
        .catch(error => {
            console.log(error);
            res.status(400).send(error)
        });
}

module.exports = {
    postVehicle,
    getVehicle
}