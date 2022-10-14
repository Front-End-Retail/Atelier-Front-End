const express = require('express');
const path = require('path');
require('dotenv').config();
const {getReviews} = require('./controllers/reviewControllers')
const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json());
// allow the client at port 3001 to send requests to the server
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001")
  next()
})

//other option for default author headers in axios
axios.defaults.headers.common['Authorization'] = `process.env.GITHUB_API_KEY`;

let authObject = { 'Authorization' : process.env.GITHUB_API_KEY }

//ROUTES BELOW
app.get('/products', (req, res) => {
  console.log('in the get', req.query)
  console.log(authObject)
  console.log('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/' + req.query.specificURL)
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/' + req.query.specificURL, { headers : authObject}).then(data => {
    console.log("got the data, I hope", data.data)
    res.send(data.data)
  }).catch(err => {
    console.log('error on server in get')
    res.status(500)
    res.end()
  })
})

app.listen(3000);
console.log('Listening on port 3001');