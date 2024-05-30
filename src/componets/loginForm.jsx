import React, { Component } from 'react';
import Input from './common/input';
import Form from './common/form';
import  Joi, { abort }  from 'joi-browser';
import { error } from 'jquery';



class LoginForm extends Form {
    state = {
        data: { username: "", password: "" },
        errors: {}
    }

    schema = {
        username : Joi.string().required().label('Username'),
        password : Joi.string().required().label('Password'),
    }
    
    
    
    doSubmit=()=>{
        console.log("submitted")

    }
    
    
    render() {
        const{data, errors} = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                <Input
                lable="Username"
                 name="username"
                 value={data.username}
                onChange={this.handleChange} 
                error={errors.username}    
                />
                <Input
                lable="Password"
                 name="password"
                 value={data.password}
                onChange={this.handleChange} 
                error={errors.password}    
                />   
                  {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}

export default LoginForm;