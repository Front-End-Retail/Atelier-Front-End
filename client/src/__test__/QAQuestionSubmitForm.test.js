import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import QAQuestionSubmitForm from '../QuestionsAndAnswers/QAQuestionSubmitForm.js'

describe('Does Question Submit Form Exist?', () => {
  test('Does Question Submit render?', () => {
    render(<QAQuestionSubmitForm />)
  })
})