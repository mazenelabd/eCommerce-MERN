import { combineReducers } from 'redux'
import { cartReducer } from './cartReducers'
import { categoryListReducer } from './categoryReducers'
import {
  productCreateReducer,
  productDetailsReducer,
  productListReducer,
  productReviewCreateReducer,
} from './productReducers'
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
  productDetails: productDetailsReducer,
  productReviewCreate: productReviewCreateReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  cart: cartReducer,
})

export default reducers
