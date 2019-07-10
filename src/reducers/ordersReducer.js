const initialState = {
  orders: []
}

export default function ordersReducer(state = initialState, action) {
    switch (action.type) {
      case 'GET_ORDERS':
        return {...state, orders: action.payload}
      case 'POST_ORDER':
        return {...state, orders: [...state.orders, action.payload]}
      case 'DELETE_ORDER':
      let orderArray = state.orders.filter(order => order.id !== action.payload)
        return {...state, orders: orderArray }
      default:
        return state;
    }
  }
