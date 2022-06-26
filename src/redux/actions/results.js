import apiCall from '../../api'

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

// Action Creator
export const fetchRecipes = (text) => async (dispath) => {
  try {
    dispath(fetchRecipesStarted())
    const res = await apiCall(`/search.php?s=${text}`)
    dispath(fetchRecipesCompleted(res?.meals))
  } catch (error) {
    dispath(fetchRecipesError(error))
  }
}

export const addSearchItem = (payload) => ({
  type: ADD_SEARCH_ITEM,
  payload,
})
