const initialState = {
  currentUser: {}
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_USER':
        return {...state, currentUser: action.payload}
      case 'LOGOUT_USER':
        return {...state, currentUser: {} }
      case 'DELETE_ORDER':
      let orderArray = state.currentUser.orders.filter(order => order.id !== action.payload)
        return {...state, currentUser: {...state.currentUser, orders: orderArray}}
      case "PATCH_PRODUCT":
        const newOrdersArray = [...state.currentUser.orders].forEach(order => order.product.sold = true)
        return {...state, currentUser: {...state.currentUser, orders: newOrdersArray}}
      case "DELETE_ALL_ORDERS":
        return {...state, currentUser: {...state.currentUser, orders: []}}
      default:
        return state;
    }
  }
