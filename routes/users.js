const express = require('express')
const uuid = require('uuid').v4
const router = express.Router()
const Users = require('../models/Users')

// Get all users
router.get('/', async (req, res, next) => {
  const users = await Users.find() //async & returns promise
  res.json(users)
})
// Get single user
router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  const searchedUser = await Users.findById(id)
  searchedUser ? res.json(searchedUser) : next()
})

// create user
router.post('/', async (req, res, next) => {
  const newUser = { ...req.body, id: uuid() }
  await Users.create(newUser)
  res.status(201).json(newUser)
})

// update user
router.patch('/:id', async (req, res, next) => {
  const { id } = req.params
  Users.findByIdAndUpdate(id, req.body, { new: true })
  const updatedUser = await Users.findById(id)
  res.json(updatedUser)
})

// delete user
router.delete('/:id', (req, res, next) => {
  const { id } = req.params
  User.findByIdAndDelete(id)
  res.sendStatus(204)
})

module.exports = router
