const express = require('express');
const path = require('path');
require('dotenv').config();
const { getReviews } = require('./controllers/reviewControllers')
const axios = require('axios');
var cors = require('cors');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json());
app.use(cors())
// allow the client at port 3001 to send requests to the server
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3001")
//   next()
// })

//other option for default author headers in axios
// axios.defaults.headers.common['Authorization'] = `process.env.GITHUB_API_KEY`;

let authObject = { 'Authorization': process.env.GITHUB_API_KEY }

//ROUTES BELOW
app.get('/products', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/' + req.query.specificURL, { headers: authObject }).then(data => {
    res.send(data.data)
  }).catch(err => {
    res.status(500)
    res.end()
  })
})

app.get('/comparison', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/' + req.query.specificURL, { headers: authObject }).then(data => {
    res.send(data.data)
  }).catch(err => {
    res.status(500)
    res.end()
    console.log(err)
  })
})

app.get('/qanda', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/' + req.query.specificURL, { headers: authObject }).then(data => {
    res.send(data.data)
  }).catch(err => {
    res.status(500)
    res.end()
  })
})

app.put('/qanda/qhelp', (req, res) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${req.body.questionId}/helpful`, {}, { headers: authObject }).then(() => {
    res.send()
  }).catch((err) => {
    res.status(400)
    res.end()
  })
})

app.put('/qanda/ahelp', (req, res) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${req.body.answerId}/helpful`, {}, { headers: authObject }).then(() => {
    res.send()
  }).catch((err) => {
    res.status(400)
    res.end()
  })
})

app.post('/qanda', (req, res) => {
  console.log(req.body)
  axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/`, req.body, { headers: authObject }).then(() => {
    res.send()
  }).catch((err) => {
    console.log('error in qanda post', err)
    res.status(500)
    res.end()
  })
})

app.get('/review', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/' + req.query.specificURL, { headers: authObject }).then(data => {
    res.send(data.data)
  }).catch(err => {
    res.status(500)
    res.end()
  })
})

app.listen(3000);
console.log('Listening on port 3000');