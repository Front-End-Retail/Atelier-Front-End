import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RelatedItemsAndComparison from '../RelatedItemsAndComparison/RelatedItemsAndComparison.jsx'
import RelatedProducts from '../RelatedItemsAndComparison/RelatedProducts.jsx'
import RelatedProduct from '../RelatedItemsAndComparison/RelatedItemsAndComparison.jsx'
import fetchAllRelatedProductsID from '../RelatedItemsAndComparison/RelatedItemsAndComparison.jsx';

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

const dummyCurrentProductID = 37320; //relatedItems got back is []

describe('relatedItemsAndComparison component', () => {

     it('fetches related items for the given current product', async ()=>{
      const data = [];
      axios.get.mockImplementationOnce(()=>Promise.resolve({data:data}));
      await expect(fetchAllRelatedProductsID(37320)).resolves.toEqual(data);
      });


    test('it renders', async() => {
    render(<RelatedItemsAndComparison currentProductID={dummyCurrentProductID} />)
    await expect(screen.getByText('YOU MIGHT ALSO LIKE')).toBeInTheDocument();
  })
});
  // test('it renders', () => {
  //   render(<RelatedItemsAndComparison />)
  //   expect(screen.getByText('YOU MIGHT ALSO LIKE')).toBeInTheDocument();
  // })

  // test('it renders the related items for given current product', async()=>{
  //   render(<RelatedItemsAndComparison currentProductID={dummyCurrentProductID}/>)
  //   expect(screen)
  // })