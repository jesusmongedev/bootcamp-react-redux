import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  data: {},
  error: false,
}

export const detailSlice = createSlice({
  name: 'mealDetail',
  initialState,
  reducers: {
    fetchDetailStarted(state) {
      state.isLoading = true
      state.data = {}
    },
    fetchDetailCompleted(state, action) {
      state.isLoading = false
      state.data = action.payload
    },
    fetchDetailError(state, action) {
      state.isLoading = false
      state.data = action.payload
    },
  },
})

export const { fetchDetailStarted, fetchDetailCompleted, fetchDetailError } =
  detailSlice.actions

export default detailSlice.reducer
