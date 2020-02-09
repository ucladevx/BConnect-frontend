import React, {Component} from './node_modules/react'

class Signup extends Component {
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

    let handleRegister = (e) => {
        e.preventDefault();
        this.props.register(this.state.username, this.state.password);
    }


    render(){
        return (
            <div> 
                <form onSubmit={()=>{this.handleRegister}}> 
                    <input type="text" onChange={this.handleChange} name="username" value="username" placeholder="my username" />
                    <input type="password" onChange={this.handleChange} name="password" value="password" placeholder="my password" />
                    <button type="submit"> Signup! </button>
                </form>
            </div>
        )
    }
}

export default Signup;