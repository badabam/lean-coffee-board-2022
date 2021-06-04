const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

require('dotenv').config()
const { PORT = 4000, SPOTIFY_TOKEN } = process.env

mongoose
  .connect('mongodb://localhost:27017/lean-coffee-board', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB (lean-coffee-board)'))
  .catch(console.error)

// express likes to call the server "app"
const app = express()

// add middleware for json data
app.use('/api', express.json()) // (req, res, next) => {...}
app.get('/api/token', (req, res) => res.send(SPOTIFY_TOKEN))
app.use('/api/users', require('./routes/users'))
app.use('/api/cards', require('./routes/cards'))
app.use(express.static('client/build'))

// redirect to index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

// error route
app.use(require('./routes/error'))

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})
