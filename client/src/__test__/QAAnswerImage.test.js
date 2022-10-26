import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import QAAnswerImage from '../QuestionsAndAnswers/QAAnswerImage.js'

const dummyPhoto = {id: 5342524, url: 'http://res.cloudinary.com/dqmnjwd2c/image/upload/v1666550445/bluecamoone_u79yb7.jpg'}

describe('The answer image exists', () => {
  test('The answer image component renders?', () => {
    render(<QAAnswerImage photo={dummyPhoto} />)
  })
})