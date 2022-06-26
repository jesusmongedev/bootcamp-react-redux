import {
  FETCH_RECIPES_STARTED,
  FETCH_RECIPES_COMPLETED,
  FETCH_RECIPES_ERROR,
  ADD_SEARCH_ITEM,
} from '../actions/results'

const initialState = {
  isLoading: false,
  data: [],
  error: false,
  searchItems: [],
}

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES_STARTED:
      return { ...state, isLoading: true }
    case FETCH_RECIPES_COMPLETED:
      return { ...state, isLoading: false, data: action.payload }
    case FETCH_RECIPES_ERROR:
      return { ...state, isLoading: false, error: action.error }
    case ADD_SEARCH_ITEM:
      return { ...state, searchItems: [...state.searchItems, action.payload] }
    default:
      return state
  }
}

export default resultsReducer
