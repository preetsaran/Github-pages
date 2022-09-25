import issues from "./slice"

export const {
  insertData,
  updateData,
  updateParams,
  updateQueryFlag

} = issues.actions

export default issues.reducer