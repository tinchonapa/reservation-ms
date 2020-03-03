const model = require('../models/reservation');

const postReservation = (req, res, next) => {
    console.log('This is res post ', req.body)
    model.createReservation(req.body)
        .then(data => {
            res.status(200).json({});
        })
        .catch(error => {
            console.log(error);
            res.status(400).send(error);
        });
}

const getReservation = (req, res, next) => {
    model.showReservation()
        .then(reservations => {
            res.status(200).json(reservations)
        })
        .catch(error => {
            res.status(400).send(error)
        });
}

module.exports = {
    postReservation,
    getReservation
}