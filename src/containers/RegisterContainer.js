import { connect } from 'react-redux';
import { register, addInfo } from '../reducers/auth'
import Signup from '../components/Signup';
import Info from '../components/Info/Info'
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

class RegisterContainer extends Component {
    render() {
      return (
        <div>
            {this.props.authenticated === false 
                ? <Signup {...this.props} />
                : <div>
                    <Info needInfo={this.props.needInfo} authenticated={this.props.authenticated} handleInfo={this.props.handleInfo} />
                </div>
            }
        </div>
      );
    }
  }


const mapStateToProps = state => ({
    authenticated: state.authReducer.authenticated,
    error: state.authReducer.error,
    needInfo: state.authReducer.needInfo
});

const mapDispatchToProps = dispatch => ({
    register: (email, password) => {
        dispatch(register(email, password));
    },
    handleInfo: (data)=> {
        dispatch(addInfo(data));
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterContainer));