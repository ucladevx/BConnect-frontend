import { connect } from 'react-redux';
import { register } from '../reducers/auth'
import Signup from '../components/Signup';
import Info from '../components/Info/Info'
import React, {Component} from 'react';
import {withRouter, Switch, Route} from 'react-router-dom'

class RegisterContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            registered: false
        }
    }

    nextForm = () => {
        this.setState({registered: true})
    }

    render() {
      return (
        <div>
            {this.state.registered === false 
                ? <Signup next={this.nextForm} error={this.props.error} 
                    authenticated={this.props.authenticated} register={this.props.register} />
                : <div>
                    <Info />
                </div>
            }
        </div>
      );
    }
  }


const mapStateToProps = state => ({
    authenticated: state.authReducer.authenticated,
    error: state.authReducer.error
});

const mapDispatchToProps = dispatch => ({
    register: (email, password) => {
        dispatch(register(email, password));
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterContainer));