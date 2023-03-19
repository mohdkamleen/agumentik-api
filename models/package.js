const mongoose = require("mongoose")

const PackageSchema = new mongoose.Schema({
    title: { type: String, require: true },
    image: String,
    rate: [],
    desc: String,
    price: Number,
    offer :{
        type:Boolean,
        default:false
    },
    disbled :{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Package', PackageSchema);