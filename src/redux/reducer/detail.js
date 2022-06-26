import {
  FETCH_MEAL_DETAIL_COMPLETED,
  FETCH_MEAL_DETAIL_STARTED,
  FETCH_MEAL_DETAIL_ERROR,
} from '../actions/detail'

const initialState = {
  isLoading: false,
  data: {},
  error: false,
}

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEAL_DETAIL_STARTED:
      return { ...state, isLoading: true, data: {} }

    case FETCH_MEAL_DETAIL_COMPLETED:
      return { ...state, isLoading: false, data: action.payload }

    case FETCH_MEAL_DETAIL_ERROR:
      return { ...state, isLoading: false, error: action.error }

    default:
      return state
  }
}

export default detailReducer
