import { connect } from 'react-redux';
import { register, addInfo } from '../reducers/auth'
import Signup from '../Components/Signup';
import Info from '../Components/Info/Info'
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

class RegisterContainer extends Component {
    render() {
      return (
        <div>
            {this.props.authenticated === false 
                ? <Signup {...this.props} />
                : <div>
                    <Info needInfo={this.props.needInfo} authenticated={this.props.authenticated} 
                        handleInfo={this.props.handleInfo} token={this.props.token} cookies={this.props.cookies} />
                </div>
            }
        </div>
      );
    }
  }


const mapStateToProps = state => ({
    authenticated: state.authReducer.authenticated,
    error: state.authReducer.error,
    needInfo: state.authReducer.needInfo,
    token: state.authReducer.token,
});

const mapDispatchToProps = dispatch => ({
    register: (email, password, fname, lname) => {
        dispatch(register(email, password, fname, lname));
    },
    handleInfo: (data, token) => {
        dispatch(addInfo(data, token));
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterContainer));