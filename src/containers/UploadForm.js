import React, { Component } from 'react';
import { Form, Select } from 'semantic-ui-react'
import axios from 'axios'
import { connect } from 'react-redux'
import { postProductToBackendFetch } from '../redux/actions'

class UploadForm extends Component {

  state = {
    name: "",
    description: "",
    file: {},
    category: "",
    size: "",
    price: 0
  }

  textHandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleChange= (event) => {
    console.dir(event.target)
    this.setState({
      file: event.target.files[0]
    })
  }

  handleSubmit =() => {
    let formData = new FormData();
    formData.append('file', this.state.file)
    formData.append('upload_preset','ib12naol')
    console.log(formData);
    axios({
      url: "https://api.cloudinary.com/v1_1/drzsg8ufp/image/upload",
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
    })
    .then(res => {
      console.log(res.data.secure_url)
      this.props.postProductToBackendFetch({
        user_id: this.props.currentUser.id,
        name: this.state.name,
        description: this.state.description,
        image_url: res.data.secure_url,
        category: this.state.category,
        size: this.state.size,
        price: this.state.price,
        sold: false
      })
      console.log(this.state);
    })
  }

  render() {
    return (
      <Form size="massive" onSubmit={this.handleSubmit}>
        <h1> Sell your items !</h1>
        <Form.Field>
          <label>Name</label>
          <input name="name" type="text" onChange={this.textHandleChange}/>
        </Form.Field>

        <Form.Field>
          <label>Description</label>
          <input name="description" type="text" onChange={this.textHandleChange}/>
        </Form.Field>

        <Form.Field>
          <label>Category</label>
          <select name="category" onChange={this.textHandleChange}>
            <option value="Athletic Shoes">Athletic Shoes</option>
            <option value="Bags">Bags</option>
            <option value="Coats & Jackets">Coats & Jackets</option>
            <option value="Hats">Hats</option>
            <option value="T-Shirts">T-Shirts</option>
            <option value="Other Men's Accessories">Other Men's Accessories</option>
          </select>
        </Form.Field>

        <Form.Field>
          <label>Size</label>
          <input name="size" type="text" onChange={this.textHandleChange}/>
        </Form.Field>

        <Form.Field>
          <label>Price</label>
          <input name="price" type="number" onChange={this.textHandleChange}/>
        </Form.Field>

        <Form.Field>
          <label>Upload</label>
          <input type="file" onChange={this.handleChange}/>
          <input type="submit"/>
        </Form.Field>
      </Form>
    );
  }

}

  const mapStateToProps = (state) => ({
    currentUser: state.usersReducer.currentUser
  })

  const mapDispatchToProps = (dispatch) => ({
    postProductToBackendFetch: (productObj) => dispatch(postProductToBackendFetch(productObj))
  })

export default connect(mapStateToProps, mapDispatchToProps) (UploadForm);
