const mongoose = require('mongoose');

let ResponseSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    mood: {
        type: String,
    },
    hobby: {
        type: String,
    },
    date : {
        type : Date,
        default : Date.now()
    },
});

module.exports = mongoose.model("Response", ResponseSchema);