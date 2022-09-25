import issues from "./slice"

export const {
  insertData,
  updateData,
  resetParams,
  updateParams,
  updateQueryFlag
} = issues.actions

export default issues.reducer