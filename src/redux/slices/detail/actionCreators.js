import { fetchDetailCompleted, fetchDetailError, fetchDetailStarted } from '.'
import apiCall from '../../../api'

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
