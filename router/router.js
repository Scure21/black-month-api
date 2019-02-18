const router = require('express').Router()
const handleRequest = require('./handleRequest')
const answerGame = require('../api/answerGame')
const newGame =  require('../api/newGame')

router.post('/answer', (req, res) => {
  handleRequest(req, res, answerGame)
})

router.get('/game', (req, res) => {
  handleRequest(req, res, newGame)
})

module.exports = router
