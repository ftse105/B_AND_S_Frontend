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
import './App.css'


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
        <img className="backgorund" src="https://images.unsplash.com/photo-1553285991-4c74211f5097?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"/>
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
