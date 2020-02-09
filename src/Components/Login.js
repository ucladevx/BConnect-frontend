import React, {Component} from './node_modules/react'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            password: '',
            username: ''
        }
    }

    let handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    let handleLogin = (e) => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password)
    }

    render(){
        return (
            <div> 
                <form onSubmit={()=>{this.handleLogin}}> 
                    <input onChange={this.handleChange} type="text" name="username" value="username" placeholder="my username" />
                    <input onChange={this.handleChange} type="password" name="password" value="password" placeholder="my password" />
                    <button type="submit"> Login! </button>
                </form>
            </div>
        );
    }
}

export default Login;