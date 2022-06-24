import { combineReducers } from 'redux'
import offerList from './slices/offerList'

const rootReducer = combineReducers({
  offerList,
})

export default rootReducer