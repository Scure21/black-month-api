/**
 * Higher Order Function that handles Express req and res objects
 * @param {Object} req - Express's request object
 * @param {Object} res - Express's response object
 * @param {Function} apiFunction - function to process specific request
 * @returns {Object} - sends either JSON payload, or status code to client
 */

const handleError = require('../utils/handleError')

async function handleRequest(req, res, apiFunction) {
    try {
        const payload = await apiFunction(req.body)

        return typeof payload === 'number'
            ? res.sendStatus(payload)
            : res.json(payload)
    } catch (err) {
        return handleError(err, res)
    }
}

module.exports = handleRequest
