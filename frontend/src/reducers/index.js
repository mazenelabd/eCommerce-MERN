import { combineReducers } from 'redux'
import { categoryListReducer } from './categoryReducers'
import { productCreateReducer, productListReducer } from './productReducers'
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from './userReducers'

const reducers = combineReducers({
  categoryList: categoryListReducer,
  productCreate: productCreateReducer,
  productList: productListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
})

export default reducers
