const express = require("express")
const cors = require('cors')
const path = require('path')
const app = express()

app.use(cors())
app.use(express.json())

//  Chiede a Node di servire i file per la nostra applicazione React
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" })})
// Tutte le altre richieste di tipo GET non gestite dal metodo precedente, restituiranno l'applicazione REACT
app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))})

app.listen(3001, () => {
    console.log(`Server listening on 3001`)})