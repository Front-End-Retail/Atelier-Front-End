import React from 'react';
import StarRating from './StarRating.js';
// import {Cloudinary} from "@cloudinary/url-gen";
// import {AdvancedImage} from '@cloudinary/react'
const axios = require('axios');
const { useState, useEffect } = React;

const ReviewForm = ({toggle, metaReviews}) => {
  // Hooks for the form entries
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [formRating, setFormRating] = useState('')
  const [recommended, setRecommended] = useState(true)
  const [characteristics, setCharacteristics] = useState({})
  const [summary, setSummary] = useState('')
  const [body, setBody] = useState('')
  const [photos, setPhotos] = useState([])
  // validation hooks
  const [nameValidation, setNameValidation] = useState(false)
  const [emailValidation, setEmailValidation] = useState(false)
  const [summaryValidation, setSummaryValidation] = useState(false)
  const [bodyValidation, setBodyValidation] = useState(false)
  // image hook
  const [imageSelected, setImageSelected] = useState("");
  const [fileInputState, setFileInputState] = useState("");

  const handleChange = (e) => {
    e.target.name === 'username' && e.target.value.length > 0 ? (setUsername(e.target.value), setNameValidation(true)) :
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
    console.log(reviewObject, photos)
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
// widget for uploading photos
  const showWidget = () => {

    let widget = window.cloudinary.createUploadWidget({
       cloudName: `de2i2agjs`,
       uploadPreset: `svtvxvjd`,
      thumbnails: '.thumbnail-div'},

    (error, result) => {
      if (!error && result && result.event === "success") {
      console.log(result.info.url);
      if (photos.length < 5) {
        let tempPhotos = [...photos]
        tempPhotos.push(result.info.url)
        setPhotos(tempPhotos)
      }

    }});
    if (photos.length < 5) {
      widget.open()
    }

  }
  return (
    <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input onChange={handleChange} maxlength="60" type="text" name="username" placeholder="Example: jackson11!"/>
            </label>
            <label>
          Email:
          <input onChange={handleChange} maxlength="60" type="email" name="email" placeholder="“Example: jackson11@email.com”"/>
          </label>
          {/* {setNameValidation ? <p>Required field</p> : null} */}
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
                      rows="7" cols="60" maxlength="1000">
            "Why did you like the product or not?"
            </textarea>
            {/* Upload files here */}
            <button type="button" onClick={showWidget}>Upload Image</button>
            <div className="thumbnail-div"></div>
        <input type="submit" value="Submit" multiple="multiple"/>

      </form>
  )
}

export default ReviewForm
