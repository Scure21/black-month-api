const db = require('../db/db')

module.exports = (data) => {
    let correct = false
    
    for (const answer of db) {
        if (data.question === answer.description && data.answer === answer.name) {
            correct = true
            break
        }
    }

    return { correct }
}
