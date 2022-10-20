export const findAverage = (ratingsObj) => {
  // console.log("findAverage", metaReviews.recommended)
  let average = 0
  let total = 0;
  for (let key in ratingsObj) {
    average += (Number(key) * Number(ratingsObj[key]))
    total += Number(ratingsObj[key])
  }
  return Math.round(((average/total) * 10) / 10)
}
 export const helpfulPerc = (helpfulObj) => {
  if (helpfulObj) {
    let total = Number(helpfulObj.false) + Number(helpfulObj.true);
    return (Math.round((Number(helpfulObj.true)/total) * 100));
  }
}

export const propComparator = (name) => {
  if (name === 'helpfulness') {
  return function (a, b)  {
  if ( a[name] < b[name] ){
    // console.log(a[name])
    // console.log(b[name])
    return -1;
  }
  if ( a[name] > b[name] ){
    return 1;
  }
  return 0;
} } else if (name === 'date') {
  return function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);
  };
} else {
  return function (a, b)  {
    let random = Math.floor(Math.random() * 2)
    return (random === 0 ? new Date(b.date) - new Date(a.date) : b.helpfulness - a.helpfulness)
  }
}
}

export const findTotal = (ratingsObj) => {
  // console.log("findAverage", metaReviews.recommended)
  let average = 0
  let total = 0;
  for (let key in ratingsObj) {
    average += (Number(key) * Number(ratingsObj[key]))
    total += Number(ratingsObj[key])
  }
  return total;
}
// used to make breakdown charts
export const findRatio = (total, currentNum) => {
  // this should be obsolete once you transition to styled components
  return (Math.round(Number(currentNum) / total * 300))
}
// use this to check if any star ratings are toggled
export let everyFunc = (currentStar) => {
  return !currentStar
}

// create object for posting a review
export const makeReviewObj = (...objs) => {
  let postObj = {}
  objs.map(obj => {
    postObj
  })
  return postObj
}