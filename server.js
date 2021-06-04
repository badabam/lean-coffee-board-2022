const express = require('express')
const mongoose = require('mongoose')

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
app.use('/api/users', require('./routes/users'))
app.use('/api/cards', require('./routes/cards'))
app.use(express.static('client/build'))

// redirect to index.html
app.use('*', (req, res) => res.sendFile('client/build/index.html'))

// error route
app.use(require('./routes/error'))

app.listen(4000, () => {
  console.log(`Server started at http://localhost:4000`)
})
