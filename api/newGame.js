const db = require('../db/db')

module.exports = () => {
    const answerCount = 6
    const answers = []
    const possibleAnswers = db
    for (let i = 0; i < answerCount; i++) {
        const index = Math.floor(Math.random() * possibleAnswers.length)
        answers.push(possibleAnswers[index])
        possibleAnswers.splice(index, 1)
    }

    const question = answers[Math.floor(Math.random() * answers.length)]

    return {
        question: question.description, answers: answers.map(answer => {
            return {name: answer.name, image: answer.image}
        })
    }
}
