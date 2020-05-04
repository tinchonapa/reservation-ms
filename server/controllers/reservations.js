const model = require('../models/reservation');

const postReservation = (req, res, next) => {
    console.log('This is res post ', req.body)
    model.createReservation(req.body)
        .then(data => {
            console.log(`This is rese post ${data}`)
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

const hideReservation = (req, res, next) => {
    model.hideReservation(req.params.id, req.body.show)
        .then((data) => {
            console.log('this Reservation has been hidden from user ', data);
            res.status(200).json({})
        })
        .catch(error => {
            console.log(error);
            res.status(400).send(error)
        });
}

const editReservation = (req, res, next) => {
    console.log('Resesrvation about to be modified ', req.params.id, ' show is ', req.body)
    model.editReservation(req.params.id, req.body)
        .then((data) => {
            console.log('Reservation succesfully modified ', data);
            res.status(200).json({})
        })
        .catch(error => {
            console.log(error);
            res.status(400).send(error)
        });
}

module.exports = {
    postReservation,
    getReservation,
    hideReservation,
    editReservation
}