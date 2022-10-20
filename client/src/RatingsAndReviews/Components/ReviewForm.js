import React from 'react';
import StarRating from './StarRating.js';
const axios = require('axios');
const { useState, useEffect } = React;

const ReviewForm = ({toggle, metaReviews}) => {
  // Will need to pass down prop which has the characteristics for the current product to conditionally render the radio buttons as needed
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [formRating, setFormRating] = useState('')
  const [recommended, setRecommended] = useState(true)
  const [characteristics, setCharacteristics] = useState({})
  const [summary, setSummary] = useState('')
  const [body, setBody] = useState('')
  const [photos, setPhotos] = useState([])

  const handleChange = (e) => {
    e.target.name === 'username' ? setUsername(e.target.value) :
    e.target.name === 'summary' ? setSummary(e.target.value) :
    e.target.name === 'helpful' ? setRecommended((e.target.value=== 'true')) : //converts string to boolean
    e.target.name === 'body' ? setBody(e.target.value) :
    e.target.name === 'email' ? setEmail(e.target.value) :
    null
    // characteristics[e.target.name] = e.target.value
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // create object for post request
    const reviewObject = {
      "product_id": Number(metaReviews.product_id),
      "rating": Number(formRating),
      "summary": summary,
      "body": body,
      "recommend": recommended,
      "name": username,
      "email": email,
      "photos": photos,
      "characteristics": characteristics
    }
    console.log(reviewObject, characteristics)
     //get rid of me please!!!!!!!!!!!!! I should be in the post request
    // toggle()
    postReview(reviewObject)
    setPhotos([])
    setUsername('')
    setSummary('')
    setRecommended('')
    setBody('')
    setEmail('')
    setCharacteristics({})

  }
  const handleStarChange =(rating) => {
    setFormRating(rating)
  }
  // handle change for the characteristic radio buttons
  const handleCharChange = (e) => {
    let tempChar = {...characteristics}
    // value needs to be an int, not a string
    tempChar[e.target.name] = Number(e.target.value)
    setCharacteristics(tempChar)
  }

  const postReview = (reviewFormObj) => {
    axios.default.post('http://localhost:3000/review', reviewFormObj).then(() => {
      toggle()
    }).catch((err) => {
      console.log('error sending question', err)
    })
  }
  return (
    <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input onChange={handleChange} type="text" name="username" placeholder="Example: jackson11!"/>
            </label>
            <label>
          Email:
          <input onChange={handleChange} type="email" name="email" placeholder="“Example: jackson11@email.com”"/>
          </label>
          <p>For authentication reasons, you will not be emailed</p>
          <StarRating handleStarChange={handleStarChange}/>
          <p>Would you recommend this product?</p>
            <input onChange={handleChange} type="radio" className="helpful radio" name="helpful" value={true}/>
              <label for="yes">Yes</label>
            <input onChange={handleChange} type="radio" className='helpful-radio' name="helpful" value={false}/>
              <label for="No">No</label>
          <p>Characteristics</p>
          {metaReviews.characteristics && Object.keys(metaReviews.characteristics).map(key => {
            let objId = metaReviews.characteristics[key].id
            return (
              <div>
                <p>{key}</p>
                <input onChange={handleCharChange} type="radio" value="1" name={objId}/>
                  <label  for="">1</label>
                <input onChange={handleCharChange} type="radio" value="2" name={objId}/>
                  <label for="">2</label>
                <input onChange={handleCharChange} type="radio" value="3" name={objId}/>
                  <label for="">3</label>
                <input onChange={handleCharChange} type="radio" value="4" name={objId}/>
                  <label for="">4</label>
                <input onChange={handleCharChange} type="radio" value="5" name={objId}/>
                  <label for="">5</label>
              </div>
            )})}

          <label>Review Summary:
              <input onChange={handleChange} type="text" name="summary" placeholder="Example: Best purchase ever!"/>
            </label>
          <label for="story">Review Body:</label>
            <textarea onChange={handleChange} id="story" name="body"
                      rows="7" cols="60">
            "Why did you like the product or not?"
            </textarea>
        <input type="submit" value="Submit" />
      </form>
  )
}

export default ReviewForm
