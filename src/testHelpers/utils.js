import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from '../App'

// Importing our own reducers
import offerList from '../redux/slices/offerList'

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { offerList }, preloadedState: {} }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}><App>{children}</App></Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { render }