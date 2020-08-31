const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 255,
        min: 8
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 255, 
        min: 8
    },
    password: {
        type: String,
        required: true,
        max: 1024, 
        min: 8
    },
    refs: [], // how to make this required?
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);