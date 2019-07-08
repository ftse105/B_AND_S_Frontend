const initialState = {
  products: [],
  productToShow: {}
}

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
      case 'GET_PRODUCTS':
        return {...state, products: action.payload}
      case 'POST_PRODUCT':
        return {...state, products: [...state.products, action.payload]}
      case "SHOW_PRODUCT":
        return {...state, productToShow: action.payload}
      default:
        return state;
    }
  }
