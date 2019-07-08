import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getOrdersFetch } from '../redux/actions'
import { Grid } from 'semantic-ui-react'
import ProductCard from './ProductCard'

class Cart extends Component {

  render() {
    console.log(this.props.currentUser);
    return (
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>

          <Grid.Column width={8}>
            {
              this.props.orders
              ?
              null
              :
              this.props.orders.map(order => {
                return <ProductCard/>
              })
            }
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
  getOrdersFetch: () => dispatch(getOrdersFetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
