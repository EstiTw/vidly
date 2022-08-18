import React, { Component } from "react";
import Form from "./common/Form";
import Input from "./common/Input";

import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().min(4).required().label("Password"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={data.username}
            error={errors.username}
            onChange={this.handleChange}
          ></Input>
          <Input
            name="password"
            label="Password"
            type="password"
            value={data.password}
            error={errors.password}
            onChange={this.handleChange}
          ></Input>
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
