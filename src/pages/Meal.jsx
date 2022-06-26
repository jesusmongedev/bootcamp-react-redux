import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fethMealDetail } from '../redux/actions/detail'

import BasicHeading from '../components/Common/BasicHeading'
import LoadingSpinner from '../components/Common/LoadingSpinner'

const Meal = () => {
  const { id } = useParams()
  const meal = useSelector((state) => state.detail.data)
  const isLoading = useSelector((state) => state.detail.isLoading)
  const error = useSelector((state) => state.detail.error)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fethMealDetail(id))
  }, [id])

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

      {Object.keys(meal)?.length ? (
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
      ) : undefined}
      <button
        className="mb-8 self-center bg-blue-600 cursor-pointer p-2 rounded-md font-bold text-white  hover:bg-blue-700 md:self-end"
        onClick={backToHomePage}
      >
        Return to Home
      </button>
    </div>
  )
}

export default Meal
