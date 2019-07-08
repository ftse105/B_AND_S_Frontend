import React, { Component } from 'react';
import { Item } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showProduct } from '../redux/actions'

class ProductCard extends Component {

  render() {
    return (
      <Item.Group>
        <Link to={`/products/${this.props.product.id}`}>
            <Item>
                <Item.Image size="small" src={this.props.product.image_url}/>
              <Item.Content>
                <Item.Header>{this.props.product.name}</Item.Header>
                <Item.Extra>$ {this.props.product.price}</Item.Extra>
              </Item.Content>
            </Item>
          </Link>

      </Item.Group>
    );
  }

}

const mapDispatchToProps = (dispatch) => ({
  showProduct: (productObj) => dispatch(showProduct(productObj))
})

export default connect(null, mapDispatchToProps) (ProductCard);
