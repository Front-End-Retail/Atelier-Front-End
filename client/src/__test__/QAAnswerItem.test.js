import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import QAAnswerItem from '../QuestionsAndAnswers/QAAnswerItem.js'

const dummyAnswer = {
  answer_id: 5989024,
  body: 'Speed feed filler for prezzie',
  date: '2022-10-25T00:00:00.000Z',
  answerer_name: 'blue steel',
  helpfulness: 0,
  photos: [{id: 5342524, url: 'http://res.cloudinary.com/dqmnjwd2c/image/upload/v1666550445/bluecamoone_u79yb7.jpg'}]
}

describe('Does the Answer Item Render', () => {
  test('Answer Item Renders', () => {
    render(<QAAnswerItem answer={dummyAnswer} />)
  })

  test('Does it contain helpful?', () => {
    render(<QAAnswerItem answer={dummyAnswer} />)
    expect(screen.getByText('Helpful?')).toBeInTheDocument()
  })
})