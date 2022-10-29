import React from 'react';
import StarRating from './StarRating.js';
import {characteristicsDesc, ratingDesc} from './helperFuncs'
// import {Cloudinary} from "@cloudinary/url-gen";
// import {AdvancedImage} from '@cloudinary/react'
const axios = require('axios');
import baseURL from '../../baseURL.js'

const { useState, useEffect } = React;

const ReviewForm = ({toggle, metaReviews, currentProductName}) => {
  // Hooks for the form entries
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [formRating, setFormRating] = useState('')
  const [recommended, setRecommended] = useState(true)
  const [characteristics, setCharacteristics] = useState({})
  const [charDescription, setCharDescription] = useState({Size: '', Width: '', Comfort: '', Quality: '', Length: '', Fit: ''})
  const [summary, setSummary] = useState('')
  const [body, setBody] = useState('')
  const [photos, setPhotos] = useState([])
  // validation hooks
  const [nameValidation, setNameValidation] = useState(false)
  const [emailValidation, setEmailValidation] = useState(false)
  const [summaryValidation, setSummaryValidation] = useState(false)
  const [bodyValidation, setBodyValidation] = useState(false)
  const [imageSelected, setImageSelected] = useState("");
  const [fileInputState, setFileInputState] = useState("");

  const handleChange = (e) => {
    e.target.name === 'username' && e.target.value.length > 0 ? (setUsername(e.target.value)) :
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
    if (validateReviewForm()) {
      // post request to API
      postReview(reviewObject)
      // reset state values for form
      setPhotos([])
      setUsername('')
      setSummary('')
      setRecommended('')
      setBody('')
      setEmail('')
      setCharacteristics({})
    }

  }
  const validateReviewForm = () => {
    console.log(username)
    let validated = true
    if (username.length < 2) {
      console.log('username fail')
      setNameValidation(true)
      validated = false
    } else {
      setNameValidation(false)
    }
    if (body.length < 50) {
      setBodyValidation(true)
      validated = false
    } else {
      setBodyValidation(false)
    }
    if (email.length < 3) {
      setEmailValidation(true)
      validated = false
    } else {
      setEmailValidation(false)
    }
    if (summary.length < 1) {
      setSummaryValidation(true)
      validated = false
    } else {
      setSummaryValidation(false)
    }
    return validated
  }

  // get rating from star rating widget
  const handleStarChange =(rating) => {
    setFormRating(rating)
  }
  // handle change for the characteristic radio buttons
  const handleCharChange = (key, e) => {
    let tempChar = {...characteristics}
    // value needs to be an int, not a string
    tempChar[e.target.name] = Number(e.target.value)
    setCharacteristics(tempChar)
    let tempCharDesc = {...charDescription}
    // import description helper object characteristicsDesc
    tempCharDesc[key] = characteristicsDesc[key][e.target.value]
    setCharDescription(tempCharDesc)
  }

  const postReview = (reviewFormObj) => {
    axios.default.post(`${baseURL}/review`, reviewFormObj).then((res) => {
      console.log('posted', res)
      toggle()
    }).catch((err) => {
      console.log('error sending question', err)
    })
  }

// widget for uploading photos
  const showWidget = () => {

    let widget = window.cloudinary.createUploadWidget({
       cloudName: 'de2i2agjs',
       uploadPreset: 'svtvxvjd',
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
    <div>
    <form data-testid="randr-form"  id="review-form-container" onSubmit={handleSubmit}>
      <div classname="user-email-div">
          <label>
            Username*:
            <input required  className="form-input review-modal-input" onChange={handleChange} maxlength="60" type="text" name="username" placeholder="Example: jackson11!"/>
            </label>
            <label>
            {/* {nameValidation && <div className="form-warning">Required field</div>} */}
          Email*:
          <input required className="form-input review-modal-input" onChange={handleChange} maxlength="60" type="email" name="email" placeholder="“Example: jackson125@email.com”"/>
          </label>
          {/* {emailValidation && <div className="form-warning">Required field</div>} */}
          <p>For authentication reasons, you will not be emailed</p>
          </div>
          <div className="rating-recommend-container">
          <div>Rating</div>
          <div className="form-star-rating"><StarRating handleStarChange={handleStarChange}/>{formRating.length > 0 && <div>"{ratingDesc(formRating)}"</div>}
          </div>
          <p>Would you recommend this product?</p>
            <input onChange={handleChange} type="radio" className="helpful radio" name="helpful" value={true}/>
              <label for="yes">Yes</label>
            <input onChange={handleChange} type="radio" className='helpful-radio' name="helpful" value={false}/>
              <label for="No">No</label>
          </div>
          <div className="char-form-title">How was the fit?</div>
          {metaReviews.characteristics && Object.keys(metaReviews.characteristics).map((key, index) => {
            let objId = metaReviews.characteristics[key].id
            return (
              <div key={index}>
                <div className="character-desc-container"><p className="character-title">{key}:{charDescription[key].length < 1 && " None selected"} </p>{charDescription[key].length > 0 && <p className="character-desc">{charDescription[key]}</p>}</div>
                <input onChange={(e) => handleCharChange(key, e)} type="radio" value="1" name={objId}/>
                  <label  for="">1</label>
                <input onChange={(e) => handleCharChange(key, e)} type="radio" value="2" name={objId}/>
                  <label for="">2</label>
                <input onChange={(e) => handleCharChange(key, e)} type="radio" value="3" name={objId}/>
                  <label for="">3</label>
                <input onChange={(e) => handleCharChange(key, e)} type="radio" value="4" name={objId}/>
                  <label for="">4</label>
                <input onChange={(e) => handleCharChange(key, e)} type="radio" value="5" name={objId}/>
                  <label for="">5</label>
              </div>
            )})}
          <div className="summary-input-div">
          <label>Review Summary*:
              <input required className="form-input review-summary-form review-modal-input" onChange={handleChange} type="text" name="summary" placeholder="Example: Best purchase ever!"/>
            </label>
            {/* {summaryValidation && <div className="form-warning">Required field</div>} */}
            </div>

          <label for="review-body">Review Body*:</label>
            <textarea required className="form-input review-modal-input" placeholder="why did you like the product or not" onChange={handleChange} name="body"
                      rows="7" cols="60" maxlength="1000">
            </textarea>
            {(body.length < 50) ? <div className="form-warning">Minimum required characters left: {50 - body.length}</div> : <div className="form-success">Minimum reached</div> }
            {/* Upload files here */}

            <div className="thumbnail-div"></div>
            <div className>
        <button className="review-photo-btn" type="button" onClick={showWidget}>Upload Image</button>
        <div className="submit-btn-container"><input className="review-submit-btn" type="submit" value="Submit" multiple="multiple"/></div>
        </div>
      </form>
      </div>
  )
}

export default ReviewForm
