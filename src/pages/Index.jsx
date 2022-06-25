import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import apiCall from '../api'
import MealItem from '../components/MealItem'
import { addSearchItem } from '../redux/actions/results'

const Index = () => {
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const navigate = useNavigate()
  const dispath = useDispatch()

  const handleSearchClick = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)

      dispath(addSearchItem(searchText))

      const response = await apiCall(`/search.php?s=${searchText}`)
      setSearchResults(response?.meals)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleMealClick = (id) => {
    navigate(`/meal/${id}`)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl  my-4 font-lato font-bold text-gray-700">
        Buscador de recetas
      </h2>
      <form
        onSubmit={handleSearchClick}
        className="flex items-center justify-center"
      >
        <input
          type="text"
          placeholder="Buscar por nombre"
          className="text-lg p-1 border-2 rounded-l-md	border-slate-500 font-lato "
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white text-lg rounded-r-md hover:bg-blue-600 font-lato font-bold self-stretch px-1.5"
          type="submit"
        >
          Buscar
        </button>
      </form>
      {isLoading && <h6 className="mt-8">Cargando...</h6>}
      {error && (
        <h6 className="text-red-400 font-bold">Ha ocurrido un error</h6>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 border mt-8 gap-4 md:gap-8">
        {!isLoading &&
          searchResults?.map((meal, index) => (
            <MealItem key={index} {...meal} onClick={handleMealClick} />
          ))}
      </div>
    </div>
  )
}

export default Index
