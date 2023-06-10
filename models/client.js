const mongoose = require ("mongoose")
const userSchema=mongoose.Schema({
    username:{type:String, require:true},
    password:{type:String, require:true},
    email:{type:String, require:true},
    statoIscrizione:{type:String }},
    {timestamps:true})
const Client=mongoose.model('client',userSchema)
module.exports = Client