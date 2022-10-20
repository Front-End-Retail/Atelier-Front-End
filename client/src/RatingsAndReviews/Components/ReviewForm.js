import React from 'react';
import StarRating from './StarRating.js';
const { useState, useEffect } = React;

const ReviewForm = ({toggle, metaReviews}) => {
  // Will need to pass down prop which has the characteristics for the current product to conditionally render the radio buttons as needed
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [formRating, setFormRating] = useState('')
  const [recommended, setRecommended] = useState('')
  var characteristics = {}
  const [summary, setSummary] = useState('')
  const [body, setBody] = useState('')

  const handleChange = (e) => {
    e.target.name === 'username' ? setUsername(e.target.value) :
    e.target.name === 'summary' ? setSummary(e.target.value) :
    e.target.name === 'helpful' ? setRecommended(e.target.value) :
    e.target.name === 'body' ? setBody(e.target.value) :
    e.target.name === 'email' ? setEmail(e.target.value) :
    characteristics[e.target.name] = e.target.value
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    toggle()
    console.log(characteristics)
    setUsername('')
    setSummary('')
    setRecommended('')
    setBody('')
    setEmail('')
    characteristics = {}

  }
  const handleStarChange =(rating) => {
    setFormRating(rating)
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
            <input onChange={handleChange} type="radio" className="helpful radio" name="helpful" value="yes"/>
              <label for="yes">Yes</label>
            <input onChange={handleChange} type="radio" className='helpful-radio' name="helpful" value="no"/>
              <label for="No">No</label>
          <p>Characteristics</p>
          {metaReviews.characteristics && Object.keys(metaReviews.characteristics).map(key => {
            let objId = metaReviews.characteristics[key].id
            return (
              <div>
                <p>{key}</p>
                <input onChange={handleChange} type="radio" value="1" name={objId}/>
                  <label  for="">1</label>
                <input onChange={handleChange} type="radio" value="2" name={objId}/>
                  <label for="">2</label>
                <input onChange={handleChange} type="radio" value="3" name={objId}/>
                  <label for="">3</label>
                <input onChange={handleChange} type="radio" value="4" name={objId}/>
                  <label for="">4</label>
                <input onChange={handleChange} type="radio" value="5" name={objId}/>
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