import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserProductListing from '../components/UserProductListing'

class UserProducts extends Component {

  render() {
    console.log(this.props.currentUser);
    return (
      <div>
        <h1>Welcome, {this.props.currentUser.username} here are your Products</h1><br/>
        {
          this.props.currentUser.products
          ?
          this.props.products.filter(product => this.props.currentUser.id === product.user_id).map(product => <UserProductListing product={product} />)
          :
          null
        }
      </div>
    );
  }

}

const mapStateToProps = state => ({
  currentUser: state.usersReducer.currentUser,
  products: state.productsReducer.products
})

export default connect(mapStateToProps, null)(UserProducts);
