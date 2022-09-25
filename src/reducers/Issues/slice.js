import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  params: {per_page: 30, labels: '', sort: '', page: 1},
  data: [],
  isQueryUpdated: false
}

const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    resetParams: (state) => {
      return {
        ...state,
        params: initialState.params
      }
    },
    updateParams: (state, action) => {
      const newParams = {...state.params, ...action.payload};
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