const SearchMealsForm = ({ handleSearchClick, setSearchText, searchText }) => {
  return (
    <form
      onSubmit={handleSearchClick}
      className="flex items-center justify-center"
    >
      <input
        type="search"
        placeholder="Buscar por nombre"
        className="text-lg p-1 border-2 rounded-l-md	border-slate-500 font-lato outline-none"
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
  )
}
export default SearchMealsForm
