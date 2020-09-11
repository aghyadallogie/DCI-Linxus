const mongoose = require("mongoose");
const { array } = require("@hapi/joi");

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
    refs: {
        type: Array,
        required: true,
        min: 1,
        max: 6
    },
    date: {
        type: Date,
        default: Date.now
    }
},
    {   // removing password and __v from the returned data from api
        toJSON: {
            transform: function (doc, ret) {
                delete ret.password;
                delete ret.__v;
            }
        }
    });

const User = mongoose.model('User', userSchema);

module.exports = User;