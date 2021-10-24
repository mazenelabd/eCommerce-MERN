import axios from 'axios'
import {
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
} from '../constants/productConstants'
import { logout } from './userActions'

export const createProduct =
  (name, price, image, category, countInStock, description) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REQUEST,
      })

      const {
        userLogin: { userInfo },
      } = getState()

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      const { data } = await axios.post(
        `/api/products`,
        { name, price, image, category, countInStock, description },
        config
      )

      dispatch({
        type: PRODUCT_CREATE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: PRODUCT_CREATE_FAIL,
        payload: message,
      })
    }
  }
