import React, { Component } from 'react'
import { createEmployee } from '../../actions/employeeActions';
import { connect } from "react-redux";

export class CreateEmployee extends Component {

  state = {
    lastName: '',
    firstName: '',
    address: '',
    postalCode: '',
    country: '',
    email: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createEmployee(this.state);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit = {this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create New Employee</h5>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="address">Address</label>
            <input type="text" id='address' onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="postalCode">Postal Code</label>
            <input type="text" id='postalCode' onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="country">Country</label>
            <input type="text" id='country' onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEmployee: (empData) => { dispatch(createEmployee(empData)) }
  }
}

export default connect(null, mapDispatchToProps)(CreateEmployee);

