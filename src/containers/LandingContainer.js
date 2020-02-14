import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchMarkers } from '../reducers/map';
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
        <Navbar authenticated={this.props.authenticated} />
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
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingContainer));