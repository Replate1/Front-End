import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class SignUpForm extends Component {
  constructor() {
    super();
    //The /register is expecting: 
    // username, 
    // password, 
    // name, 
    // address, 
    // phone_number,
    // type
    this.state = {
      username: "",
      password: "",
      name: "",
      address: "",
      phone_number: "",
      type: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("The form was submitted with the following data:");
    console.log(this.state);
    axios
      .post("https://app-replate2.herokuapp.com/api/auth/register")
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="username">
              Create Username
            </label>
            <input
              type="username"
              id="username"
              className="FormField__Input"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              Name
            </label>
            <input
              type="name"
              id="name"
              className="FormField__Input"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="address">
            Address
            </label>
            <input
              type="address"
              id="address"
              className="FormField__Input"
              placeholder="address"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="phone_number"
              id="phone_number"
              className="FormField__Input"
              placeholder="Phone #"
              name="phone_number"
              value={this.state.phone_number}
              onChange={this.handleChange}
            />
          </div>
          {/* Drop Down Box */}
          <label className="FormField__Label">
            Are you a Business or Volunteer?
            <select value={this.state.type} onChange={this.handleChange}>
              <option value="1">Business</option>
              <option value="2">Volunteer</option>
            </select>
          </label>
          <br></br>
          <br></br>
        
          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input
                className="FormField__Checkbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              I agree all statements in{" "}
              <a href="www.termsofservice.com" className="FormField__TermsLink">
                terms of service
              </a>
            </label>
          </div>
          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button>{" "}
            <Link to="/sign-in" className="FormField__Link">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUpForm;