const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
const router = require('./router/router')
const handleError = require('./utils/handleError')

const app = express()
app.use(cors())
app.use('/', express.static(path.join(__dirname, "/public")))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))


//necessary for load balancers
app.use('*', (req, res, next) => {
    if (req.get('connection') === 'Keep-alive') {
        return res.sendStatus(200)
    } else {
        next()
    }
})


app.use('/api', router)

app.use('*', (req, res) => {
    return res.sendStatus(404)
})

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
    } else {
        return handleError(err, res)
    }
})

module.exports = app
