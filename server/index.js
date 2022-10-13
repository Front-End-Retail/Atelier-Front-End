const express = require('express');
const path = require('path');
require('dotenv').config();
const {getReviews} = require('./controllers/reviewControllers')
const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json());

//sets up middleware to add github API key to every request
// app.use((req, res, next) => {
//   res.setHeader({'Authorization' : process.env.GITHUB_API_KEY})
//   next()
// });

//other option for default author headers in axios
axios.defaults.headers.common['Authorization'] = `process.env.GITHUB_API_KEY`;

let authObject = { 'Authorization' : process.env.GITHUB_API_KEY }

//ROUTES BELOW
app.get('/reviews', (req, res) => {
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

// app.get('/reviews', (req, res) => {
//   console.log('in the get')
//   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/' + req.url).then(data => {
//     console.log("got the data, I hope")
//   }).catch(err => {
//     console.log('error on server in get', err)
//   })
//   res.end()
// })

app.listen(3001);
console.log('Listening on port 3001');