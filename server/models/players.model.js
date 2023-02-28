const mongoose = require("mongoose");

const PlayersSchema = mongoose.Schema({
    player: {
        type: String, 
        required: [true, 'Nombre requerido']
    },
    email: {
        type: String, 
        required: [true, 'Email requerido']},
        
},{ timestamps: true })


const Players = mongoose.model("Player", PlayersSchema);

module.exports = Players;