import React from 'react';
import StarRating from './StarRating.js'
const { useState, useEffect } = React;

const ReviewForm = ({toggle}) => {
  // Will need to pass down prop which has the characteristics for the current product to conditionally render the radio buttons as needed
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [formRating, setFormRating] = useState('')
  const [recommended, setRecommended] = useState('')
  const [characteristics, setCharacteristics] = useState('')
  const [summary, setSummary] = useState('')
  const [body, setBody] = useState('')

  const handleChange = (e) => {
    e.target.name === 'username' ? setUsername(e.target.value) :
    e.target.name === 'summary' ? setSummary(e.target.value) :
    e.target.name === 'helpful' ? setRecommended(e.target.value) :
    e.target.name === 'body' ? setBody(e.target.value) :
    e.target.name === 'email' ? setEmail(e.target.value) :
    null
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(rating, body)
    toggle()
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
          <StarRating handleChange={handleStarChange}/>
          <p>Would you recommend this product?</p>
            <input onChange={handleChange} type="radio" className="helpful radio" name="helpful" value="yes"/>
              <label for="yes">Yes</label>
            <input onChange={handleChange} type="radio" className='helpful-radio' name="helpful" value="no"/>
              <label for="No">No</label>
          <p>Characteristics</p>
            <input type="radio" value="1"/>
              <label for="">1</label>
            <input type="radio" value="2"/>
              <label for="">2</label>
            <input type="radio" value="3"/>
              <label for="">3</label>
            <input type="radio" value="4"/>
              <label for="">4</label>
            <input type="radio" value="5"/>
              <label for="">5</label>
          <label>Review Summary:
              <input onChange={handleChange} type="text" name="summary" placeholder="Example: Best purchase ever!"/>
            </label>
          <label for="story">Review Body:</label>
            <textarea onChange={handleChange} id="story" name="body"
                      rows="10" cols="60">
            "Why did you like the product or not?"
            </textarea>
        <input type="submit" value="Submit" />
      </form>
  )
}

export default ReviewForm