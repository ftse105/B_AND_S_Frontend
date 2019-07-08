import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {getProfileFetch, getProductsFetch, getOrdersFetch, logoutUser} from './redux/actions';
import Signup from './components/Signup';
import Login from './components/Login';
import MainContainer from './containers/MainContainer'
import Navbar from './components/Navbar'
import Account from './components/Account'
import Cart from './components/Cart'
import ProductShowPage from './components/ProductShowPage'


class App extends Component {
  componentDidMount = () => {
    this.props.getProfileFetch()
    this.props.getProductsFetch()
    this.props.getOrdersFetch()
  }

  handleLogout = (event) => {
    event.preventDefault()
    localStorage.removeItem("token")
    this.props.logoutUser()
    this.props.history.push("/login")
  }

  render() {
    return (
      <div>
        <Navbar handleLogout={this.handleLogout} currentUser={this.props.currentUser} />
        <Switch>
          <Route exact path="/users/:id" render={(routerProps) => {
              return <Account handleLogout={this.handleLogout} {...routerProps}/>
            }}/>
          <Route path="/home" render={(routerProps) => {
							return <MainContainer products={this.props.products}{...routerProps}/>
						}} />
          <Route path="/signup" render={(routerProps) => {
              return <Signup />
            }}/>
          <Route path="/login" render={(routerProps) => {
              return <Login currentUser={this.props.currentUser} {...routerProps}/>
            }}/>
          <Route path="/cart" render={(routerProps) => {
              return <Cart {...routerProps}/>
            }}/>
          <Route path="/products/:id" render={(routerProps) => {
                return <ProductShowPage products={this.props.products}{...routerProps}/>
              }}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.usersReducer.currentUser,
  products: state.productsReducer.products,
  orders: state.ordersReducer.orders
})

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getProductsFetch: () => dispatch(getProductsFetch()),
  getOrdersFetch: () => dispatch(getOrdersFetch()),
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
