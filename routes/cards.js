/* Dazu legt ihr bitte auch eine Datei cards.http an mit Beispielrequests zur Dokumentation.
Eine card hat die properties: text, author, votes. */

const express = require('express')
const uuid = require('uuid').v4
const router = express.Router()

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
router.get('/', (req, res, next) => {
  res.json(cards)
})

// Get single card
router.get('/:id', (req, res, next) => {
  const { id } = req.params
  const searchedCard = cards.find(card => card.id === id)
  searchedCard ? res.json(searchedCard) : next()
})

// create card
router.post('/', (req, res, next) => {
  const newCard = { ...req.body, id: uuid() }
  cards.push(newCard)
  res.status(201).json(newCard)
})

// update card
router.patch('/:id', (req, res, next) => {
  const { id } = req.params
  const index = cards.findIndex(user => user.id === id)
  const searchedCard = cards[index]
  const updatedCard = { ...searchedCard, ...req.body }
  cards.splice(index, 1, updatedCard)
  res.json(updatedCard)
})

// delete card
router.delete('/:id', (req, res, next) => {
  const { id } = req.params
  cards = cards.filter(card => card.id !== id)
  res.sendStatus(204)
})

module.exports = router
