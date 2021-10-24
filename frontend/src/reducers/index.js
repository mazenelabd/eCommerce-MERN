import { combineReducers } from 'redux'
import { productCreateReducer } from './productReducers'
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from './userReducers'

const reducers = combineReducers({
  productCreate: productCreateReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
})

export default reducers
