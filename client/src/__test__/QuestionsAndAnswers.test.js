import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import QuestionsAndAnswers from '../QuestionsAndAnswers/QuestionsAndAnswers.js'

const dummyQuestions = {
  "product_id": "37311",
  "results": [{
        "question_id": 37,
        "question_body": "Why is this product cheaper here than other sites?",
        "question_date": "2018-10-18T00:00:00.000Z",
        "asker_name": "williamsmith",
        "question_helpfulness": 4,
        "reported": false,
        "answers": {
          68: {
            "id": 68,
            "body": "We are selling it here without any markup from the middleman!",
            "date": "2018-08-18T00:00:00.000Z",
            "answerer_name": "Seller",
            "helpfulness": 4,
            "photos": []
            // ...
          }
        }
      },
      {
        "question_id": 38,
        "question_body": "How long does it last?",
        "question_date": "2019-06-28T00:00:00.000Z",
        "asker_name": "funnygirl",
        "question_helpfulness": 2,
        "reported": false,
        "answers": {
          70: {
            "id": 70,
            "body": "Some of the seams started splitting the first time I wore it!",
            "date": "2019-11-28T00:00:00.000Z",
            "answerer_name": "sillyguy",
            "helpfulness": 6,
            "photos": [],
          },
          78: {
            "id": 78,
            "body": "9 lives",
            "date": "2019-11-12T00:00:00.000Z",
            "answerer_name": "iluvdogz",
            "helpfulness": 31,
            "photos": [],
          }
        }
      },
      // ...
  ]
}

jest.mock('axios')

describe('Overall Question Component and Functionality', () => {
  beforeAll(() => {
    axios.get.mockResolvedValue({ data: dummyQuestions });
  });

    it("Should render the 2 dummy questions after loading", async () => {
      act(() => {
        render(<QuestionsAndAnswers currentProductID={"37311"} currentProductName={'Camo Onesie'}/>)
      })

      expect(screen.getByText('QUESTIONS & ANSWERS')).toBeInTheDocument();
      const questionInstances = await waitFor(() => screen.findAllByTestId('questionsList'))
      expect(questionInstances).toHaveLength(2)
    });
});