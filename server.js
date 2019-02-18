const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const morgan = require('morgan');
const router = require('./router')

module.exports = app;
app.use('/api', router);

app.use('/', express.static(path.join(__dirname, "/public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));



app.use('/', function(req, res, next){
   if (req.url === '/forbidden') {
        next({
          status: 403,
          message: 'forbidden'});
    } else if(req.url === '/broken'){
        next({
          status: 500,
          message: 'Internal Server Error'});
  }
})

//------Error handling middleware-------------//
app.use(function(err, req, res, next){
  console.error(err)
  res.status(err.status || 500).send(err.message || 'Internal Server Error')
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});