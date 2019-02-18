'use strict'

const app = require('./app')

const port = process.env.PORT || 3000

let server
async function startup() {
    if (process.env.NODE_ENV !== 'production') {
        console.log('Starting server...')
    }

    server = app.listen(port, () => {
        if (process.env.NODE_ENV !== 'production') {
            console.log('Server started')
        }
    })
}

startup()

process.on('unhandledRejection', async (reason, location) => {
    const err = { reason, location }
    console.error(err)
})

process.on('SIGTERM', () => {
    server.close(() => {
        process.exit(0)
    })
})
