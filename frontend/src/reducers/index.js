import { combineReducers } from 'redux'
import { cartReducer } from './cartReducers'
import { categoryListReducer } from './categoryReducers'
import {
  orderCreateReducer,
  orderDeliverReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderPayReducer,
} from './orderReducers'
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
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  orderListMy: orderListMyReducer,
})

export default reducers
