const mongoose = require("mongoose")

const TestemonialSchema = new mongoose.Schema({
    name: { type: String, require: true },
    image: String,
    address: String,
    desc: String,
    rate: { type: Number, default: 0 },
    disbled :{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Testemonial', TestemonialSchema);