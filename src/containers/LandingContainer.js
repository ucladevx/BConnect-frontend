import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchMarkers } from '../reducers/map';
import { logout } from '../reducers/auth'
import Map from '../components/Map';
import Navbar from '../components/Navbar'
import {withRouter} from 'react-router-dom'



class LandingContainer extends Component {
  componentWillMount() {
      this.props.getMarkers();
  }

  render() {
    return (
      <div>
        <Navbar authenticated={this.props.authenticated} logout = {this.props.logout} />
        <div>
          <Map  markers={this.props.markers} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.authReducer.authenticated,
  markers: state.mapReducer.markers,
});

const mapDispatchToProps = dispatch => ({
  getMarkers: () => {
    dispatch(fetchMarkers());
  },
  logout : () => {
    dispatch(logout());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingContainer));