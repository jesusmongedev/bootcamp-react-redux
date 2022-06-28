import { combineReducers } from '@reduxjs/toolkit'

// Common Reducers
import results from './results'
// import detail from './detail'

// Slices
import detailSlice from '../slices/detail'

//!TODO Migrate results using createSlice from redux/toolkit

export default combineReducers({
  results,
  // detail,
  detailSlice,
})
