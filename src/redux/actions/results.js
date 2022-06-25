export const FETCH_RECIPES_STARTED = 'FETCH_RECIPES_STARTED'
export const FETCH_RECIPES_COMPLETED = 'FETCH_RECIPES_COMPLETED'
export const FETCH_RECIPES_ERROR = 'FETCH_RECIPES_ERROR'
export const ADD_SEARCH_ITEM = 'ADD_SEARCH_ITEM'

const fetchRecipesStarted = () => ({
  type: FETCH_RECIPES_STARTED,
})

const fetchRecipesCompleted = (payload) => ({
  type: FETCH_RECIPES_COMPLETED,
  payload,
})

const fetchRecipesError = (error) => ({
  type: FETCH_RECIPES_ERROR,
  error,
})

export const addSearchItem = (payload) => ({
  type: ADD_SEARCH_ITEM,
  payload,
})
