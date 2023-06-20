const mongoose = require ("mongoose")
const userSchema=mongoose.Schema({
    idCliente:{type:String, require:true},
    nome:{type:String, require:true},
    cognome:{type:String, require:true},
    via:{type:String, require:true},
    citta:{type:String, require:true},
    cap:{type:String, require:true},
    idOcchiale:{type:String, require:true}
}, {timestamps:true})
const Order = mongoose.model('ordini',userSchema)
module.exports = Order