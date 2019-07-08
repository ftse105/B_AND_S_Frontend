const initialState = {
  orders: []
}

export default function ordersReducer(state = initialState, action) {
    switch (action.type) {
      case 'GET_ORDERS':
        return {...state, orders: action.payload}
      case 'POST_ORDER':
      console.log(action.payload);
        return {...state, orders: [...state.orders, action.payload]}
      default:
        return state;
    }
  }
