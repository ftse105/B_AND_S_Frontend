import React, { Component } from 'react';
import { Item, Button } from 'semantic-ui-react'

class UserProductListing extends Component {

  render() {
    return (
      <Item.Group>
        <Item>
          <Item.Image size="small" src={this.props.product.image_url}/>

          <Item.Content>
            <Item.Header>{this.props.product.name}</Item.Header>
            <Item.Extra>$ {this.props.product.price}</Item.Extra>
          </Item.Content>

        </Item>
      </Item.Group>
    );
  }

}

export default UserProductListing;
