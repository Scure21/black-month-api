const person =  require('./person')
const router = require('express').Router();

router.use('/api', person)
router.use('/person', person)

router.use(function(err, req, res, next){
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal Server Error')
})

module.exports = router;