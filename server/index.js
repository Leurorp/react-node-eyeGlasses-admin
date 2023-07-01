const express = require("express")
const mongoose = require ('mongoose')
const Client = require ('../models/client.js')
const Occhiale = require ('../models/prodoct.js')
const Order = require ('../models/orders.js')
const cors = require('cors')
const path = require('path')
const app = express()
const dotenv = require ('dotenv')//per usare le chiavi in .env
const bodyParser = require ('body-parser')

dotenv.config()//per usare le chiavi in .env

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//  Chiede a Node di servire i file per la nostra applicazione React
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get("/api", (req, res) => {
    res.json({ message: "Hello from api !" })})

// Tutte le altre richieste di tipo GET non gestite dal metodo precedente, restituiranno l'applicazione REACT
app.get("/prova",(req,res) => {
    res.json({ message:'Hello from prova !!!' })})

app.get("/users", async(req,res) => {
    try{const users=await Client.find()
    res.json(users)}
    catch (error) {res.status(404).json({message:error.message})}})

app.get("/store", async(req,res) => {
    try{const prodocts=await Occhiale.find()
    res.json(prodocts)}
    catch (error) {res.status(404).json({message:error.message})}})

app.get("/orders", async(req,res) => {
    try{const orders=await Order.find()
    res.json(orders)}
    catch (error) {res.status(404).json({message:error.message})}})
    
app.post ("/insertProduct", async (req,res)=>{
    const product=req.body; console.log(product)
    const newProduct=new Occhiale(product)
    try {await newProduct.save()
    res.status(201).json({message:'Prodotto aggiunto con successo.'})}
    catch(error){res.status(409).json({message:error.message})}})

app.delete ("/deleteProduct/:id", async (req,res)=>{
    const {id}=req.params; console.log(id)
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message:"id non valido"})}
    try {await Occhiale.findByIdAndDelete(id)
        res.json({messaggio:'utente eliminato con successo'})}
    catch (error) {res.status(404).json({message:error.message})}})

app.patch ("/updateProduct/:id", async (req,res)=>{
    const {id}=req.params; console.log(id)
    const data={...req.body}; console.log(data)
    if (!mongoose.Types.ObjectId.isValid(id))
    {return res.json({message:'id non presente'})}
    try { const product=await Occhiale.findByIdAndUpdate(id,data,{new:true})
        res.status(200).json(product)}
    catch (error) {res.status(404).json({message:error.message})}})

app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))})

mongoose.connect(process.env.CONNECTION_URL)
.then(()=>{
app.listen(3001, () => {
    console.log(`Server listening on 3001`)})})
.catch (error=>console.error('Errore connessione: '+error))