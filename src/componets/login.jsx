import React, { Component } from 'react';
import Input from './common/input';



class Login extends Component {
    state = {
        account: { username: "", password: "" },
        errors: {}
    }
    validate = ()=>{
        const errors = {};
        const{account}=this.state;
        if(account.username.trim()==="") 
            errors.username= "Username required"
        
        if(account.password.trim()==="")
            errors.password ="Password is required"
        
        return Object.keys(errors).length=== 0? null : errors;
        // return {username: 'Username required'}

    }

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        console.log(errors)
        this.setState({errors: errors|| {}});
        if(errors) return;

        
        console.log("submitted")
    };

    validateProperty=(input)=>{
        if(input.name==="username") {
            if(input.value.trim()==="") return "username Required not empty "
        };
        if (input.name==="password"){
            if(input.value.trim()==="") return "password Required should not empty"
        }
    }

    handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors}
        const errorMessage= this.validateProperty(input)
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = { ...this.state.account }
        account[input.name] = input.value
        this.setState({ account, errors })
    }
    render() {
        const{account, errors} = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                <Input
                lable="Username"
                 name="username"
                 value={account.username}
                onChange={this.handleChange} 
                error={errors.username}    
                />
                <Input
                lable="Password"
                 name="password"
                 value={account.password}
                onChange={this.handleChange} 
                error={errors.password}    
                />
                    
                    <button className="btn btn-primary">login</button>
                </form>
            </div>
        );
    }
}

export default Login;