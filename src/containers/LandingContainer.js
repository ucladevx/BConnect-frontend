import { connect } from 'react-redux';
import Home from "../Components/Home"
import Navbar from "../Components/Navbar"
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import { logout } from '../reducers/auth'


class LandingContainer extends Component {
    constructor(props){
        super(props)
    }
    
    redirect = () => {
        this.props.history.push("/signup")
    }    

    render() {
      return (
        <div>
            <Navbar authenticated={this.props.authenticated} logout ={this.props.logout} />
            <Home redirect={this.redirect} />
        </div>
      );
    }
  }


const mapStateToProps = state => ({
    authenticated: state.authReducer.authenticated,
});

const mapDispatchToProps = dispatch => ({
    logout : () => {
      dispatch(logout());
    }
  });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingContainer));