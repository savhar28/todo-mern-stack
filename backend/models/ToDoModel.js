const mongoose = require("mongoose");

const todochema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("ToDo", todochema)