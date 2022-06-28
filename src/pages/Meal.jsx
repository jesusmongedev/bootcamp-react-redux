import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BasicHeading from '../components/Common/BasicHeading'
import LoadingSpinner from '../components/Common/LoadingSpinner'

import {
  mealDetailData,
  isLoadingMealDetail,
  mealDetailError,
} from '../redux/slices/detail/selectors'

const Meal = () => {
  const isLoading = useSelector(isLoadingMealDetail)
  const meal = useSelector(mealDetailData)
  const error = useSelector(mealDetailError)

  const navigate = useNavigate()

  const backToHomePage = () => {
    navigate('/')
  }

  {
    isLoading && <LoadingSpinner />
  }

  {
    error && <h6 className="text-red-400 font-bold">Ha ocurrido un error</h6>
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <BasicHeading title="Recetario" />

      {meal && (
        <div className="flex flex-col gap-4 pb-8 lg:flex-row lg:items-center lg:gap-8">
          <div className=" flex flex-col items-center ">
            <label className="font-lato font-bold text-xl mb-4">
              {meal.strMeal}
            </label>
            <img
              src={meal?.strMealThumb}
              alt={meal?.strMeal}
              className="sm:max-w-sm rounded-md"
            />
          </div>
          <div className="pb-4">
            <label className="text-lg font-lato font-semibold">
              Instrucciones:
            </label>
            <p className="font-lato">{meal?.strInstructions}</p>
          </div>
        </div>
      )}
      <div className="flex gap-8 md:ml-auto">
        <a
          className="primary-button mb-8 self-center"
          href={meal?.strYoutube}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch Video
        </a>
        <button
          className="secondary-button mb-8 self-center"
          onClick={backToHomePage}
        >
          Return to Home
        </button>
      </div>
    </div>
  )
}

export default Meal
