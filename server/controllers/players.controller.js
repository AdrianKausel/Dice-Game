const Players = require("../models/players.model");

module.exports.findAllPlayers = (req, res) => {
    Players.find()
        .then(allPlayers => res.json({ players: allPlayers }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSinglePlayers = (req, res) => {
    Players.findOne(req.params.id )
            .then(resp => {
                res.json({ 
                    players: resp,
                })
            }).catch(err => {
                res.json({ 
                    message: "Something went wrong", 
                    error: err 
                })
            });
};

module.exports.createNewPlayers= (req, res) => {
    Players.create(req.body)
        .then(resp => {
            res.json({ 
                players: resp })})
        .catch(err => {
            res.json({ 
                message: "Something went wrong", error: err })});
};

module.exports.updateExistingPlayers = (req, res) => {
    Players.findOneAndUpdate(req.params.id , req.body)
        .then(resp=> {
            res.json({ 
                players: req.players,
                error: false
            })
        }).catch(err => {
            res.json({ 
                message: "Something went wrong", 
                error: true
            })
            });
};

module.exports.deleteAnExistingPlayers = (req, res) => {
    Players.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};