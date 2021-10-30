import {
  CATEGORY_BY_ID_FAIL,
  CATEGORY_BY_ID_REQUEST,
  CATEGORY_BY_ID_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
} from '../constants/categoryConstants'

export const categoryListReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: true, categories: [] }
    case CATEGORY_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        categories: action.payload.categories,
      }
    case CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const categoryByIdReducer = (state = { category: [] }, action) => {
  switch (action.type) {
    case CATEGORY_BY_ID_REQUEST:
      return { loading: true, category: [] }
    case CATEGORY_BY_ID_SUCCESS:
      return {
        loading: false,
        success: true,
        category: action.payload,
      }
    case CATEGORY_BY_ID_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
