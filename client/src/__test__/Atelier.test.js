import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react'
import ReactDOM from 'react-dom';
import Overview from '../Overview/Overview.js';
import RatingsAndReviews from '../RatingsAndReviews/RatingsAndReviews.js';
test('loads items eventually', () => {

  render(<Overview />);
  it('should render the overview container to the DOM', () => {
    expect(screen.getByTestId('overview')).toBeInTheDocument();
  })
})

test('load the main container div', () => {

  it('should return true for main randr div') {
    expect(screen.getByTestId('randr-div'))
  }
})

