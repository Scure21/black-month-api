const router = require('express').Router()
const handleRequest = require('./handleRequest')
const allPeople = require('../api/allPeople')
const answerGame = require('../api/answerGame')
const newGame =  require('../api/newGame')

router.post('/answer', (req, res) => {
  handleRequest(req, res, answerGame)
})

router.get('/game', (req, res) => {
  handleRequest(req, res, newGame)
})

router.get('/learn', (req, res) => {
  handleRequest(req, res, allPeople)
})

module.exports = router
