import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MealItem from '../components/MealItem'
import BasicHeading from '../components/Common/BasicHeading'
import SearchMealsForm from '../components/SearchMealsForm'
import LoadingSpinner from '../components/Common/LoadingSpinner'

import { addSearchItem, fetchRecipes } from '../redux/actions/results'
import {
  isLoadingResults,
  resultsData,
  resultsError,
} from '../redux/selectors/results'

const Index = () => {
  const [searchText, setSearchText] = useState('')
  const isLoading = useSelector(isLoadingResults)
  const searchResults = useSelector(resultsData)
  const error = useSelector(resultsError)

  const dispath = useDispatch()

  const handleSearchClick = (e) => {
    e.preventDefault()
    dispath(addSearchItem(searchText))
    dispath(fetchRecipes(searchText))
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
            <MealItem key={index} {...meal} />
          ))}
      </div>
    </div>
  )
}

export default Index
