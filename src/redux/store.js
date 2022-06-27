import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import rootReducer from './rootReducer'

export const createStore = () =>
configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false
  }),
  preloadedState: {},
})

export const store = createStore();