import React, { Component } from 'react';
import { Grid, Menu, Header, Button } from 'semantic-ui-react'
import UserProducts from '../containers/UserProducts'
import OrderHistory from '../containers/OrderHistory'
import UploadForm from '../containers/UploadForm'

class Account extends Component {

  state = {
    activeList: "myProducts"
  }

  handleClick = (event, {name}) => {
    this.setState({
      activeList: name
    })
  }

  componentChange = (activeList) => {
    switch (activeList) {
      case "myProducts":
        return <UserProducts/>
      case "uploadForm":
        return <UploadForm/>
    }
  }

  render() {
    return (
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={4}>
            <Menu size="huge" vertical>
              <Menu.Item name="myProducts" active={this.state.activeList === "myProducts"} onClick={this.handleClick}>
                <Header size="huge">My</Header>
                <Header size="huge">Products</Header><br/>
              </Menu.Item>

              <Menu.Item>
              <br/>
              </Menu.Item>
              <br/>

              <Menu.Item name="uploadForm" active={this.state.activeList === "uploadForm"} onClick={this.handleClick}>
                <Header size="huge">Sell Your</Header>
                <Header size="huge">Items !</Header><br/>
              </Menu.Item>

            </Menu>

              <Button size="huge" onClick={this.props.handleLogout}>
                Log out
              </Button>
          </Grid.Column>

          <Grid.Column width={12}>
            {this.componentChange(this.state.activeList)}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

}

export default Account;
