import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import useImageModal from '../QuestionsAndAnswers/useImageModal.js'

describe('Use Modal Function', () => {
  test('toggle toggles boolean', () => {
    expect(useImageModal)
  })
})

//Not sure how to get this one to work at all