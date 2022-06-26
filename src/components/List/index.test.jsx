import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import mockOffers from '../../testHelpers/offersMockData.json'
import { act, screen, render } from '../../testHelpers/utils'
import { fetchOfferList } from '../../redux/slices/offerList'
import "@testing-library/jest-dom/extend-expect";

import List from './index'

const apiUrl = "http://cdn.sixt.io/codingtask/offers.json"
jest.mock('../../redux/slices/offerList');

// export const handlers = [
//   rest.get(apiUrl, (req, res, ctx) => {
//     return res(mockOffers, ctx.delay(150))
//   })
// ]

// const server = setupServer(...handlers)

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

test('Renders the List component and shows loading... while it fetches the offers json', async () => {
  render(<List />)
  expect(screen.getByText(/Loading\.\.\./i)).toBeInTheDocument()
  // expect(fetchOfferList).toHaveBeenCalledTimes();
  expect(fetchOfferList).toHaveBeenCalledWith();
})

// test('Renders the List component and fetches the offers json', async () => {
//   await act(async () => {
//     render(<List />)
//   })
//   const boxes = container.getElementsByClassName('offerCard');
//   console.log(boxes.length);
//   expect(await screen.queryByText(/offers/i)).toBeInTheDocument()
// })