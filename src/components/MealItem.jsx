import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchMealDetail } from '../redux/slices/detail/actionCreators'

const MealItem = ({ strMealThumb, strMeal, idMeal }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleMealClick = (id) => {
    dispatch(fetchMealDetail(id))
    navigate(`/meal/${id}`)
  }

  return (
    <div className="flex flex-col ">
      <img
        src={strMealThumb}
        alt={strMeal}
        className=" cursor-pointer rounded-md"
        onClick={() => handleMealClick(idMeal)}
      />
      <p className="mt-2 font-bold text-gray-700 text-left w-11/12 font-lato text-ellipsis overflow-hidden whitespace-nowrap">
        {strMeal}
      </p>
    </div>
  )
}

export default MealItem
