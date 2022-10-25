import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import QAAnswerSubmitForm from '../QuestionsAndAnswers/QAAnswerSubmitForm.js'

describe('Does Answer Submit Form Exist?', () => {
  test('Does Answer Submit render?', () => {
    render(<QAAnswerSubmitForm />)
  })

  test('Does it contain expected title?', () => {
    render(<QAAnswerSubmitForm />)
    expect(screen.getByText('Your Answer*')).toBeInTheDocument()
  })
})