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

const hideVehicle = (req, res, next) => {
    model.hideVehicle(req.params.id, req.body.show)
        .then(data => {
            console.log('this vehicle has been hidden from user ', data);
            res.status(200).json(data)
        })
        .catch(error => {
            console.log(error);
            res.status(400).send(error)
        });
}

const editVehicle = (req, res, next) => {
    console.log('Customer about to be modified ', req.params.id, ' show is ', req.body)
    model.editVehicle(req.params.id, req.body)
        .then((data) => {
            console.log('Customer succesfully modified ', data);
            res.status(200).json({})
        })
        .catch(error => {
            console.log(error);
            res.status(400).send(error)
        });
}

module.exports = {
    postVehicle,
    getVehicle,
    hideVehicle,
    editVehicle
}