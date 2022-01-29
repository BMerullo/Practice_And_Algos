const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({


    name: {
        type: String,
        required: [true, "Name is reuired"],
        minLength: [2, "Name should be at least 2 characters long!"]
    },

    position: {
        type: String,
    },

    gameOneStatus: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided",
    },

    gameTwoStatus: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided",
    },

    gameThreeStatus: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided"
    },

},
    { timestamps: true }
)



const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;