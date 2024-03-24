import React, { Component } from 'react';






class Login extends Component {
    state = {
        account: { username: "", password: "" }
    }

    username = React.createRef()
    componentDidMount() {
        this.username.current.focus()
    }
    handleSubmit = e => {
        e.preventDefault();

        console.log("submitted")
    };
    handleChange = ({currentTarget: input}) => {
        const account = { ...this.state.account }
        account[input.name] = input.value
        this.setState({ account })
    }
    render() {
        const{account} = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <lable htmlFor="username">Username</lable>
                        <input
                            name="username"
                            ref={this.username} value={account.username}
                            onChange={this.handleChange} id="username" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <lable htmlFor="password">Password</lable>
                        <input
                        value={account.password}
                        onChange={this.handleChange}
                            name="password"
                            id="password" type="text" className="form-control" />
                    </div>
                    <button className="btn btn-primary">login</button>
                </form>
            </div>
        );
    }
}

export default Login;