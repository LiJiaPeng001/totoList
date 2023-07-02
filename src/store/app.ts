import { combineReducers, configureStore } from '@reduxjs/toolkit'
import countReducer from './count'

const rootReducer = combineReducers({
  count: countReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store

export type AppState = ReturnType<typeof rootReducer>
