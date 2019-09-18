import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userLoginFetch} from '../redux/actions';
import { Form, Button } from 'semantic-ui-react'

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userLoginFetch(this.state)
    this.props.history.push("/home")
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <input onChange={this.handleChange} name="username" value={this.state.username} placeholder='Username' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder='Password' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>

    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.usersReducer.currentUser
})

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
