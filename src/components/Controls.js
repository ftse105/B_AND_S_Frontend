import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Image, Menu } from 'semantic-ui-react'

class Controls extends Component {


  render() {
    return (
      this.props.currentUser.id
      ?
      <Menu.Menu position="right">
        <Link to={`/users/${this.props.currentUser.id}`}>
          <Image src="https://image.flaticon.com/icons/svg/61/61205.svg" size="small"/>
        </Link>
        <Link to="/cart">
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4pLbCzoTdQgJYMggDt1RaTqrD2cZqRhrZFOSkPemrX00afDig" size="small"/>
        </Link>
      </Menu.Menu>
      :
      <Menu.Menu position="right">
        <Link className="item" to="/login">
          Login
        </Link>
        <Link className="item" to="/signup">
          Sign Up
        </Link>
      </Menu.Menu>
    );
  }

}

export default Controls;
