export const userPostFetch = user => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.errors) {
          // Here you should have logic to handle invalid creation of a user.
          // This assumes your Rails API will return a JSON object with a key of
          // 'errors' if there is an error with creating the user, i.e. invalid username
          alert(data.errors)
        } else {
          localStorage.setItem("token", data.jwt)
          dispatch(loginUser(data.user))
        }
      })
  }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})


export const userLoginFetch = user => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.errors) {
          // Here you should have logic to handle invalid login credentials.
          // This assumes your Rails API will return a JSON object with a key of
          // 'errors' if there is an error
          alert(data.errors)
        } else {
          localStorage.setItem("token", data.jwt)
          dispatch(loginUser(data.user))
          // window.location = `users/${data.user.id}`
        }
      })
  }
}

export const getProfileFetch = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:3001/api/v1/profile", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': token
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.errors) {
            // An error will occur if the token is invalid.
            // If this happens, you may want to remove the invalid token.
            localStorage.removeItem("token")
          } else {
            dispatch(loginUser(data.user))
          }
        })
    }
  }
}

export const getProductsFetch = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/products")
    .then(res => res.json())
    .then(data => {
      dispatch({type: "GET_PRODUCTS", payload: data})
    })
  }
}

export const logoutUser = () => ({
  type: "LOGOUT_USER"
})

export const postProductToBackendFetch = (productObj) => {
  return dispatch => {
    const token = localStorage.token;
    return fetch("http://localhost:3001/api/v1/products", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({
        product: productObj
      })
    })
    .then(res => res.json())
    .then(data => {
      dispatch({type: "POST_PRODUCT", payload: data})

    })

  }
}

export const showProduct = (productObj) => ({
  type: "SHOW_PRODUCT",
  payload: productObj
})

export const getOrdersFetch = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/orders")
    .then(res => res.json())
    .then(data => {
      dispatch({type: "GET_ORDERS", payload: data})
    })
  }
}

export const postOrderToBackend = (obj) => {
  return dispatch => {
    const token = localStorage.token
    return fetch("http://localhost:3001/api/v1/orders", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({
        order: obj
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.errors) {
        alert(data.errors)
      } else {
        dispatch({type: "POST_ORDER", payload: data})
      }
    })
  }
}

export const deleteOrderFetch = id => {
  return dispatch => {
    const token = localStorage.token
    return fetch(`http://localhost:3001/api/v1/orders/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token
      },
    })
    .then(data => {
      dispatch({type: "DELETE_ORDER", payload: id})
    },console.log("deleted"))
  }
}
