import { configureStore } from '@reduxjs/toolkit'
import issues from '../reducers/Issues'
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    issues
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(logger)
})

export * from './hooks';

export default store;