const mongoose = require("mongoose");

const referenceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 16
    }
})

module.exports = mongoose.model('Reference', referenceSchema);