const Player = require("../models/player.model");

module.exports = {

    createNewPlayer: (req, res) => {
        Player.create(req.body)
            .then((newPlayer) => {
                console.log(newPlayer)
                res.json(newPlayer);
            })
            .catch((err) => {
                console.log("Something went wrong with createNewPlayer")
                res.status(400).json(err)
            })
    },

    getAllPlayers: (req, res) => {
        Player.find({})
            .then((allPlayers) => {
                console.log(allPlayers)
                res.json(allPlayers);
            })
            .catch((err) => {
                res.json({ message: "Something went wrong with getAllPlayers", error: err });
            })
    },
    deletePlayer: (req, res) => {
        Player.deleteOne({ _id: req.params.id })
            .then((deletedPlayer) => {
                console.log(deletedPlayer)
                res.json(deletedPlayer)
            })
            .catch((err) => {
                console.log("deletePlayer failed")
                res.json({ message: "Something went wrong with deletePlayer", error: err })
            })
    },

    updatePlayer: (req, res) => {
        Player.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true, }
        )
            .then((updatedPlayer) => {
                console.log(updatedPlayer)
                res.json(updatedPlayer);
            })
            .catch((err) => {
                res.status(400).json(err)
                res.json({message: "Something went wrong in updatePet", error: err})
            });
    },

}