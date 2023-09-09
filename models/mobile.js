const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mobileSchema = new Schema({
    brand: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    currency: {
        type: String,
        require: true
    },

    price: {
        type: Number,
        require: true
    },



}, { timestamps: true })

module.exports = mongoose.model("Mobile", mobileSchema);