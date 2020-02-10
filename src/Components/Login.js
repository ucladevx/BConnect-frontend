import React, {Component} from 'react'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            password: '',
            username: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password)
    }

    render(){
        console.log(this.props)
        return (
            <div> 
                <form onSubmit={this.handleLogin}> 
                    <input onChange={this.handleChange} type="text" name="username" value={this.state.username} placeholder="my username" />
                    <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder="my password" />
                    <button type="submit"> Login! </button>
                </form>
            </div>
        );
    }
}

export default Login;