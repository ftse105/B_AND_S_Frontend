import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getOrdersFetch, getProfileFetch, deleteOrderFetch } from '../redux/actions'
import { Grid, Header, Button } from 'semantic-ui-react'
import ProductCartItem from './ProductCartItem'

class Cart extends Component {

  handleClick = () => {
    this.props.currentUser.orders.forEach(order => {

      this.props.deleteOrderFetch(order.id)
    })
  }

  componentDidMount = () => {
    this.props.getProfileFetch()
  }

  totalPrice = () => {
    console.log(this.props.currentUser.orders);
    let sum = 0
    if (this.props.currentUser.orders === undefined) {
      return null
    } else {
        for (let i = 0; i < this.props.currentUser.orders.length; i++) {
          let order = this.props.currentUser.orders[i]
          // console.log(this.props.order);

            sum += order.product.price

      }
    }
    return sum
  }

  render() {
    console.log(this.props.currentUser);
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>

          <Grid.Column width={8}>
            <Header textAlign="center" size="huge">Your Shopping Cart</Header>
            {
              this.props.currentUser.username
              ?
              this.props.currentUser.orders.map(order => {
                return <ProductCartItem key={order.id} order={order}/>
              })
              :
              null
            }
            <Header>Your Total is: ${this.totalPrice()}</Header>
            <Button onClick={this.handleClick}>Checkout</Button>
          </Grid.Column>

          <Grid.Column width={4}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
// this.props.users.orders.map(product => {
//   console.log(product);
//   return <ProductCard />
// })

const mapStateToProps = state => {
  // console.log(state)
  return {currentUser: state.usersReducer.currentUser}
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getOrdersFetch: () => dispatch(getOrdersFetch()),
  deleteOrderFetch: (id) => dispatch(deleteOrderFetch(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
