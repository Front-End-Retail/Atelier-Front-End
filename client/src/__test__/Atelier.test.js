import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import Overview from '../Overview/Overview.js';
import RatingsAndReviews from '../RatingsAndReviews/RatingsAndReviews.js';
import QuestionsAndAnswers from '../QuestionsAndAnswers/QuestionsAndAnswers.js';
import RelatedItemsAndComparison from '../RelatedItemsAndComparison.jsx';
// import {App} from '../index.js'
// test('loads items eventually', () => {

//   render(<Overview />);
//   it('should render the overview container to the DOM', () => {
//     expect(screen.getByTestId('overview')).toBeInTheDocument();
//   })
// })
const dummyReviews = {
  "product": "37311",
  "page": 0,
  "count": 5,
  "results": [
    {
      "review_id": 5,
      "rating": 3,
      "summary": "I'm enjoying wearing these shades",
      "recommend": false,
      "response": null,
      "body": "Comfortable and practical.",
      "date": "2019-04-14T00:00:00.000Z",
      "reviewer_name": "shortandsweeet",
      "helpfulness": 5,
      "photos": [{
          "id": 1,
          "url": "urlplaceholder/review_5_photo_number_1.jpg"
        },
        {
          "id": 2,
          "url": "urlplaceholder/review_5_photo_number_2.jpg"
        },
        // ...
      ]
    },
    {
      "review_id": 3,
      "rating": 4,
      "summary": "I am liking these glasses",
      "recommend": false,
      "response": "Glad you're enjoying the product!",
      "body": "They are very dark. But that's good because I'm in very sunny spots",
      "date": "2019-06-23T00:00:00.000Z",
      "reviewer_name": "bigbrotherbenjamin",
      "helpfulness": 5,
      "photos": [],
    },
    // ...
  ]
}

jest.mock('axios')

describe('load the main container div', function() {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
    axios.get.mockResolvedValue({ data: dummyReviews });
  });
  afterEach(() => {
    ReactDOM.createPortal.mockClear();
    cleanup()
  });
  it("Should render 2 reviews after loading", async () => {
    axios.get.mockResolvedValue({ data: dummyReviews });

    render(<RatingsAndReviews currentProductID={37311}/>);
    const reviewInstances = await waitFor(() => screen.findAllByTestId('randr-entry'))
    expect(reviewInstances).toHaveLength(2);
  });
  // it('should return true for main randr div', () => {
  //   render(<RatingsAndReviews />)
  //   expect(screen.getByTestId('randr-div')).toBeTruthy();
  // })
})





