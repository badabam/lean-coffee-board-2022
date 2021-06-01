/* Dazu legt ihr bitte auch eine Datei cards.http an mit Beispielrequests zur Dokumentation.
Eine card hat die properties: text, author, votes. */

const express = require('express')
const uuid = require('uuid').v4
const router = express.Router()
const Cards = require('../models/Cards')

let cards = [
  {
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, deleniti, dolor officia nulla excepturi eum doloremque, magni repudiandae perferendis fugiat laudantium nesciunt repellendus! At reiciendis quia voluptatibus voluptatem alias! Id!',
    author: 'John Doe',
    votes: 5,
    id: '0',
  },
  {
    text: 'Text 2: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, deleniti, dolor officia nulla excepturi eum doloremque, magni repudiandae perferendis fugiat laudantium nesciunt repellendus! At reiciendis quia voluptatibus voluptatem alias! Id!',
    author: 'Jane Doe',
    votes: 3,
    id: '1',
  },
]

// Get all cards
router.get('/', async (req, res, next) => {
  const cards = await Cards.find() //async & returns promise
  res.json(cards)
})

// Get single card
router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  const searchedCard = await Card.findById(id)
  searchedCard ? res.json(searchedCard) : next()
})

// create card
router.post('/', async (req, res, next) => {
  const newCard = { ...req.body, id: uuid() }
  await Cards.create(newCard)
  res.status(201).json(newCard)
})

// update card
router.patch('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(Cards.findByIdAndUpdate(id, req.body, { new: true }))
})

// delete card
router.delete('/:id', (req, res, next) => {
  const { id } = req.params
  Cards.findByIdAndDelete(id)
  res.sendStatus(204)
})

module.exports = router
