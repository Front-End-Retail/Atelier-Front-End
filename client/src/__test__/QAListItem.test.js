import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import QAListItem from '../QuestionsAndAnswers/QAListItem.js'

const dummyQuestion = {
  "question_id": "642829",
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
    }
  }
}

const dummyAnswerData = {
  "question": "642829",
  "page": 1,
  "count": 5,
  "results": [
      {
          "answer_id": 5988917,
          "body": "camo kitty",
          "date": "2022-10-22T00:00:00.000Z",
          "answerer_name": "and e",
          "helpfulness": 31,
          "photos": [
              {
                  "id": 5342473,
                  "url": "http://res.cloudinary.com/dqmnjwd2c/image/upload/v1666472228/bettertinycat_sjpjzv.jpg"
              }
          ]
      },
      {
          "answer_id": 5988956,
          "body": "Hopefully by the end of October.",
          "date": "2022-10-24T00:00:00.000Z",
          "answerer_name": "whatever",
          "helpfulness": 4,
          "photos": [
              {
                  "id": 5342495,
                  "url": "http://res.cloudinary.com/dvpmx7xsz/image/upload/v1666582464/q44nal1g3besazkqozjc.webp"
              }
          ]
      },
      {
          "answer_id": 5988985,
          "body": "console.lost",
          "date": "2022-10-25T00:00:00.000Z",
          "answerer_name": "console.lost",
          "helpfulness": 3,
          "photos": []
      },
      {
          "answer_id": 5988963,
          "body": "blue steel",
          "date": "2022-10-24T00:00:00.000Z",
          "answerer_name": "blue steel",
          "helpfulness": 1,
          "photos": [
              {
                  "id": 5342496,
                  "url": "http://res.cloudinary.com/dqmnjwd2c/image/upload/v1666626399/bluecamoone_yy8ovm.jpg"
              }
          ]
      },
      {
          "answer_id": 5989019,
          "body": "dates off? also how questions going through?",
          "date": "2022-10-25T00:00:00.000Z",
          "answerer_name": "and e",
          "helpfulness": 0,
          "photos": []
      }
  ]
}

jest.mock('axios')

describe('Does QAList Exist?', () => {
  beforeAll(() => {
    axios.get.mockResolvedValue({ data: dummyAnswerData });
  });

  test('it renders', () => {
    render(<QAListItem question={dummyQuestion} />)
  })
})

describe('Do any answers exist?', () => {
  beforeAll(() => {
    axios.get.mockResolvedValue({ data: dummyAnswerData });
  });

  test('2 answers render', async () => {
    act(() => {
      render(<QAListItem question={dummyQuestion} />)
    })
    const answerInstances = await waitFor(() => screen.findAllByTestId('answersList'))
    expect(answerInstances).toHaveLength(2)
  })
})