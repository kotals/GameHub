
import {combineReducers}from 'redux'
import gamesReducer from './gamesReducer'
import loaderReducer from './loaderReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers ({
  loader: loaderReducer,
  games : gamesReducer,
  signIn: userReducer,
  
})

export default rootReducer
