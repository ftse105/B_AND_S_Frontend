import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid, Image, Header, Button } from 'semantic-ui-react'
import { getOrdersFetch, postOrderToBackend } from '../redux/actions'

class ProductShowPage extends Component {

  addToCart = (obj) => {
    // console.log(obj)
    if (!this.props.currentUser.orders.includes(obj)) {
      this.props.postOrderToBackend(obj)
    }
  }

  render() {
    console.log(this.props.currentUser);
    return (
      <div>
        {
            this.props.products.map(product => {
            if(product.id === parseInt(this.props.match.url.slice(10,14)))
            return(
              <Grid  key={product.id} celled>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Image  src={product.image_url} size="huge"/>
                  </Grid.Column>

                  <Grid.Column width={12}>
                    <Header size="huge">{product.name}</Header>
                    <Header></Header><br/>
                    <Header>{product.description}</Header><br/>
                    <Header></Header><br/>
                    <Header>{product.size}</Header><br/>
                    <Header></Header><br/>
                    <Header>{product.description}</Header><br/>
                    <Header></Header><br/>
                    <Header>Only ${product.price} !!!</Header>
                    <Button onClick={() => {this.addToCart(product)}}>ADD TO CART</Button>
                  </Grid.Column>

                </Grid.Row>
              </Grid>
          )
          })
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  productToShow: state.productsReducer.productToShow,
  currentUser: state.usersReducer.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  getOrdersFetch: () => dispatch(getOrdersFetch()),
  postOrderToBackend:  (obj) => dispatch(postOrderToBackend(obj))
})


export default connect(mapStateToProps, mapDispatchToProps) (ProductShowPage);
