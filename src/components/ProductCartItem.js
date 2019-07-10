import React, { Component } from 'react';
import { Item, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteOrderFetch, getProfileFetch } from '../redux/actions'


class ProductCartItem extends Component {

  componentDidMount = () => {
    this.props.getProfileFetch()
  }

  removeFromCart = (id) => {
    this.props.deleteOrderFetch(id)
  }

  handleClick = () => {
    this.removeFromCart(this.props.order.id)
  }

  render() {
    console.log(this.props.order.product);
    return (
      <Item.Group>
        <Link to={`/products/${this.props.order.product.id}`}>
            <Item>
                <Item.Image size="small" src={this.props.order.product.image_url}/>
              <Item.Content>
                <Item.Header>{this.props.order.product.name}</Item.Header>
                <Item.Extra>$ {this.props.order.product.price}</Item.Extra>
              </Item.Content>
            </Item>
          </Link>
          <Button onClick={this.handleClick}>Remove from Cart</Button>
      </Item.Group>
    );
  }
}

 const mapDispatchToProps = dispatch => ({
   deleteOrderFetch: (id) => dispatch(deleteOrderFetch(id)),
   getProfileFetch: () => dispatch(getProfileFetch())
 })


export default connect(null, mapDispatchToProps)(ProductCartItem);
