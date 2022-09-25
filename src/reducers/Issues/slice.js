import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  params: {per_page: 60, labels: '', sort: '', page: 1},
  data: [],
  isQueryUpdated: false
}

const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    updateParams: (state, action) => {
      const newParams = {...state.params, ...action.payload};

        console.log("newParams", newParams)
      return {
        ...state,
        params: newParams
      }
    },
    insertData: (state, action) => {
      return {
        ...state,
        data: [...state.data, ...action.payload]
      }
    },
    updateData: (state, action) => {
      return {
        ...state,
        data: action.payload
      }
    },
    updateQueryFlag: (state, action) => {
      return {
        ...state,
        isQueryUpdated: action.payload
      }
    },
  }
})

export default issuesSlice