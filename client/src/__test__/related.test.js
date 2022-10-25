import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RelatedItemsAndComparison from '../RelatedItemsAndComparison.jsx'

jest.mock('axios')

// describe('load the main container div', function() {
//   beforeAll(() => {
//     ReactDOM.createPortal = jest.fn((element, node) => {
//       return element;
//     });
//     axios.get.mockResolvedValue({ data: dummyReviews });
//   });
//   afterEach(() => {
//     ReactDOM.createPortal.mockClear();
//     cleanup()
//   });
//   it("Should render 2 reviews after loading", async () => {
//     axios.get.mockResolvedValue({ data: dummyReviews });

//     render(<RatingsAndReviews currentProductID={37311}/>);
//     const reviewInstances = await waitFor(() => screen.findAllByTestId('randr-entry'))
//     expect(reviewInstances).toHaveLength(2);
//   });
//   // it('should return true for main randr div', () => {
//   //   render(<RatingsAndReviews />)
//   //   expect(screen.getByTestId('randr-div')).toBeTruthy();
//   // })
// })

describe('relatedItemsAndComparison component', () => {
  test('it renders', () => {
    render(<RelatedItemsAndComparison />)

    expect(screen.getByText('YOU MIGHT ALSO LIKE')).toBeInTheDocument();
  })
})