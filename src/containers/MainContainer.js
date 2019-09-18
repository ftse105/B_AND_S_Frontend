import React, { Component } from 'react';
import ProductCard from '../components/ProductCard'
import { Grid, Menu, Header, Search } from 'semantic-ui-react'

class MainContainer extends Component {

  state = {
    searchTerm: "",
    category: "",
    filtered: false
  }

  handleClick = (event) => {
    this.setState({
      category: event.target.innerText,
      filtered: true
    })
  }

  onSearchChange = (event) =>{
    this.setState({
      searchTerm: event.target.value
    })
  }

  changeToAll = () => {
    this.setState({
      filtered: false
    })
  }

  render() {
    const filteredSearchedProducts = this.props.products.filter(product => {
      return (product.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    })

    const filteredProductCategory = filteredSearchedProducts.filter(product => {
      return(product.category === this.state.category)
    })
    return (
      <Grid celled>
        <Grid.Row>

          <Grid.Column width={3}>
            <Header>What are you looking for today?</Header>
            <Search onSearchChange={this.onSearchChange}/>
            <Menu vertical>
              <Menu.Item name="" onClick={this.changeToAll}>
                All Products
              </Menu.Item>
              <Menu.Item name="Athletic Shoes" onClick={this.handleClick}>
                Athletic Shoes
              </Menu.Item>
              <Menu.Item name="Bags" onClick={this.handleClick}>
                Bags
              </Menu.Item>
              <Menu.Item name="Coats & Jackets" onClick={this.handleClick}>
                Coats & Jackets
              </Menu.Item>
              <Menu.Item name="Hats" onClick={this.handleClick}>
                Hats
              </Menu.Item>
              <Menu.Item name="T-Shirts" onClick={this.handleClick}>
                T-Shirts
              </Menu.Item>
              <Menu.Item name= "Other Men's Accesories" onClick={this.handleClick}>
                Other Men's Accessories
              </Menu.Item>
            </Menu>
          </Grid.Column>

          <Grid.Column width={13}>
            {
              this.state.filtered
              ?
              filteredProductCategory.map(product => {
                return <ProductCard key={product.id} product={product}/>
              })

              :
              filteredSearchedProducts.map(product => {
                return <ProductCard key={product.id} product={product}/>
              })
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

}

export default MainContainer;
