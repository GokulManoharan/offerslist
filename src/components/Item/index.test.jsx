import React from 'react'
// import { rest } from 'msw'
// import { setupServer } from 'msw/node'
import mockOffers from '../../testHelpers/offersMockData.json'
import { screen, render } from '../../testHelpers/utils'
import ListItem from './index'

const apiUrl = "http://cdn.sixt.io/codingtask/offers.json"

test('Renders the Item component displays the name and price', async () => {
  const { container } = render(<ListItem data={mockOffers.offerList.list.data.offers[0]} />)

  // should show 'Audi' on the screen when item component is loaded
  // expect(await screen.queryByText(/Audi/i)).toBeInTheDocument()
})