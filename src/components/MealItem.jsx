const MealItem = ({ strMealThumb, strMeal, onClick, idMeal }) => {
  return (
    <div className="flex flex-col ">
      <img
        src={strMealThumb}
        alt={strMeal}
        className=" cursor-pointer rounded-md"
        onClick={() => onClick(idMeal)}
      />
      <p className="mt-2 font-bold text-gray-700 text-left w-11/12 font-lato text-ellipsis overflow-hidden whitespace-nowrap">
        {strMeal}
      </p>
    </div>
  )
}

export default MealItem
