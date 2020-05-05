import { connect } from 'react-redux';
// import Home from "../Components/OldHome"
import Home from '../Components/Home'
import Navbar from "../Components/Navbar"
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import { logout } from '../reducers/auth'

// <Navbar authenticated={this.props.authenticated} logout ={this.props.logout} />

class LandingContainer extends Component {
    constructor(props){
        super(props)

        if(props.authenticated){
          this.props.history.push("/connect")
        }
    }
    
    redirect = () => {
        this.props.history.push("/signup")
    }    

    render() {
      return (
        <div>
            
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