const express = require("express")
const mongoose = require ('mongoose')
const Client = require ('../models/client.js')
const Occhiale = require ('../models/prodoct.js')
const Order = require ('../models/orders.js')
const cors = require('cors')
const path = require('path')
const app = express()
const dotenv = require ('dotenv')//per usare le chiavi in .env

dotenv.config()//per usare le chiavi in .env

app.use(cors())
app.use(express.json())

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

app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))})

mongoose.connect(process.env.CONNECTION_URL)
.then(()=>{
app.listen(3001, () => {
    console.log(`Server listening on 3001`)})})
.catch (error=>console.error('Errore connessione: '+error))