import React, { Component } from "react";
import Form from "./common/form";
import Joi, { abort } from "joi-browser";
import { error } from "jquery";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
    // showPassword: false,
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("submitted");
  };
  //   onShowpass = () => {
  //     this.setState((prevState) => ({
  //       showPassword: !prevState.showPassword,
  //     }));
  //   };

  render() {
    // const { showPassword } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput(
            "password",
            "Password",
            {
              /* showPassword ? "text" : "password" */
            },
            "password"
          )}
          {this.renderButton("Login")}
          {/* <button onClick={this.onShowpass}>show Password</button> */}
        </form>
      </div>
    );
  }
}

export default LoginForm;
