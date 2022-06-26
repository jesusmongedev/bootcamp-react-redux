import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import apiCall from '../api'
import BasicHeading from '../components/Common/BasicHeading'
import LoadingSpinner from '../components/Common/LoadingSpinner'

const Meal = () => {
  const { id } = useParams()
  const [meal, setMeal] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        setError({})
        setMeal({})

        const response = await apiCall(`/lookup.php?i=${id}`)
        setMeal(response?.meals?.[0])
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])

  const backToHomePage = () => {
    navigate('/')
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (Object.keys(error)?.length) {
    return <h6 className="text-red-400 font-bold">Ha ocurrido un error</h6>
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
