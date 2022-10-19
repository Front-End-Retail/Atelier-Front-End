/**
 * @jest-environment jsdom
 */

import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom';
import RatingsAndReviews from '../RatingsAndReviews/RatingsAndReviews.js'
import Overview from '../Overview/Overview.js';
test('loads items eventually', async () => {
  render(<RatingsAndReviews />)
  const testButt = screen.querySelector(`button[name="test-button"]`)
  expect(testButt).toBeTruthy();
  fireEvent.click(container.querySelector(`button[name="test-button"]`))
  await waitFor(() => {
    screen.findAllByText('Rating Test')
  })

  // const inputEl = container.querySelector(`input[name="userName"]`);
  // // Click button
  // fireEvent.click(screen.getByText(''))

  // // Wait for page to update with query text
  // const items = await screen.findAllByText(/Item #[0-9]: /)
  // expect(items).toHaveLength(10)
})