import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { addSearchItem, fetchRecipes } from '../redux/actions/results'
import MealItem from '../components/MealItem'
import BasicHeading from '../components/Common/BasicHeading'
import SearchMealsForm from '../components/SearchMealsForm'
import LoadingSpinner from '../components/Common/LoadingSpinner'

const Index = () => {
  const [searchText, setSearchText] = useState('')
  const searchResults = useSelector((state) => state.results.data)
  const isLoading = useSelector((state) => state.results.isLoading)
  const error = useSelector((state) => state.results.error)

  const navigate = useNavigate()
  const dispath = useDispatch()

  const handleSearchClick = (e) => {
    e.preventDefault()
    dispath(addSearchItem('hol'))
    dispath(fetchRecipes(searchText))
  }

  const handleMealClick = (id) => {
    navigate(`/meal/${id}`)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <BasicHeading title="Buscador de recetas" />
      <SearchMealsForm
        handleSearchClick={handleSearchClick}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      {isLoading && <LoadingSpinner />}
      {error && (
        <h6 className="text-red-400 font-bold">Ha ocurrido un error</h6>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-6 mt-8 gap-4 md:gap-8">
        {!isLoading &&
          searchResults?.map((meal, index) => (
            <MealItem key={index} {...meal} onClick={handleMealClick} />
          ))}
      </div>
    </div>
  )
}

export default Index
