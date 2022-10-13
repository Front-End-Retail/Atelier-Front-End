// Put all controllers for the ratings and reviews modules here

exports.getReviews = (req, res) => {

  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products').then(data => {
    console.log('successful')
    res.send(data)
  }).catch(error => {
    console.log('could not fetch reviews', error)
    res.sendStatus(501)
  })
}