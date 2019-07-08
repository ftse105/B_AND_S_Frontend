import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import productsReducer from './productsReducer'
import ordersReducer from './ordersReducer'

const rootReducer = combineReducers({
  usersReducer: usersReducer,
  productsReducer: productsReducer,
  ordersReducer: ordersReducer
})

export default rootReducer
