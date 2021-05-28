const express = require('express')
const uuid = require('uuid').v4
const router = express.Router()

const users = [
  {
    name: 'Jane Doe',
    age: 51,
    email: 'jane@doe.de',
    id: '0',
  },
  {
    name: 'John Doe',
    age: 55,
    email: 'john@doe.de',
    id: '1',
  },
]
// Get all users
router.get('/', (req, res, next) => {
  res.json(users)
})
// Get single user
router.get('/:id', (req, res, next) => {
  const { id } = req.params
  const searchedUser = users.find(user => user.id === id)
  searchedUser ? res.json(searchedUser) : next()
})

// create user
router.post('/', (req, res, next) => {
  const newUser = { ...req.body, id: uuid() }
  users.push(newUser)
  res.status(201).json(newUser)
})

// update user
router.patch('/:id', (req, res, next) => {
  const { id } = req.params
  console.log(id)
  const index = users.findIndex(user => user.id === id)
  const selectedUser = users[index]
  updatedUser = { ...selectedUser, ...req.body }
  users.splice(index, 1, updatedUser)
  res.json(updatedUser)
})

// delete user
router.delete('/:id', (req, res, next) => {
  const { id } = req.params
  updatedUsers = users.filter(user => user.id !== id)
  res.sendStatus(204)
})

module.exports = router
