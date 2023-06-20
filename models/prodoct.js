const mongoose = require ("mongoose")
const userSchema=mongoose.Schema({
    nome:{type:String, require:true},
    gender:{type:String, require:true},
    materiale:{type:String, require:true},
    prezzo:{type:Number, require:true}
}, {timestamps:true})
const Occhiale = mongoose.model('prodotti',userSchema)
module.exports = Occhiale