import issues from "./slice"

export const {
  insertData,
  updateData,
  resetParams,
  updateParams,
  updateQueryFlag,
  setIsFetchMore
} = issues.actions

export default issues.reducer