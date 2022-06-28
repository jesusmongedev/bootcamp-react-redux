// Meal Detail Selectors
export const isLoadingMealDetail = (state) => state.detailSlice.isLoading
export const mealDetailData = (state) => state.detailSlice.data
export const mealDetailError = (state) => state.detailSlice.error
