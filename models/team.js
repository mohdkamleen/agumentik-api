const mongoose = require("mongoose")

const TeamSchema = new mongoose.Schema({
    name: { type: String, require: true },
    image: String,
    position: String,
    about: String,
    social: {
        facebook:String,
        twitter:String,
        instagram:String
    }, 
},{
    timestamps:true
})

module.exports = mongoose.model('Team', TeamSchema);