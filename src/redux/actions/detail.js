import apiCall from '../../api'

export const FETCH_MEAL_DETAIL_STARTED = 'FETCH_MEAL_DETAIL_STARTED'
export const FETCH_MEAL_DETAIL_COMPLETED = 'FETCH_MEAL_DETAIL_COMPLETED'
export const FETCH_MEAL_DETAIL_ERROR = 'FETCH_MEAL_DETAIL_ERROR'

const fetchDetailStarted = () => ({
  type: FETCH_MEAL_DETAIL_STARTED,
})

const fetchDetailCompleted = (payload) => ({
  type: FETCH_MEAL_DETAIL_COMPLETED,
  payload,
})

const fetchDetailError = (error) => ({
  type: FETCH_MEAL_DETAIL_ERROR,
  error,
})

// Action creator
export const fetchMealDetail = (mealId) => async (dispath) => {
  try {
    dispath(fetchDetailStarted())
    const res = await apiCall(`/lookup.php?i=${mealId}`)
    dispath(fetchDetailCompleted(res?.meals[0]))
  } catch (error) {
    dispath(fetchDetailError(error))
  }
}
