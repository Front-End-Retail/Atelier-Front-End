/**
 * @jest-environment jsdom
 */

import {render, fireEvent, screen} from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom';
import RatingsAndReviews from '../RatingsAndReviews/RatingsAndReviews.js'

test('loads items eventually', () => {
  render(<RatingsAndReviews />)
  const { container } = render(<RatingsAndReviews />);
  const testButt = container.querySelector(`button[name="test-button"]`)
  expect(testButt).toBeTruthy();
  fireEvent.click(container.querySelector(`button[name="test-button"]`))
  // const inputEl = container.querySelector(`input[name="userName"]`);
  // // Click button
  // fireEvent.click(screen.getByText(''))

  // // Wait for page to update with query text
  // const items = await screen.findAllByText(/Item #[0-9]: /)
  // expect(items).toHaveLength(10)
})