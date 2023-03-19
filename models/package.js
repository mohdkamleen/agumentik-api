const mongoose = require("mongoose")

const PackageSchema = new mongoose.Schema({
    title: { type: String, require: true },
    image: String,
    rate: [],
    desc: String,
    price: Number,
    offer: Boolean
})

module.exports = mongoose.model('Package', PackageSchema);