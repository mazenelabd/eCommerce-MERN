import { combineReducers } from 'redux'
import { userLoginReducer } from './userReducers'

const reducers = combineReducers({
  userLogin: userLoginReducer,
})

export default reducers
