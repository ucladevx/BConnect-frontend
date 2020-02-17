import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchMarkers } from '../reducers/map';
import { logout } from '../reducers/auth'
import Map from '../components/Map';
import Navbar from '../components/Navbar'
import {withRouter} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';



class LandingContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      infoHidden: true
    }
  }
  
  componentWillMount() {
      this.props.getMarkers();
  }

  render() {
    return (
      <div>
        <Navbar authenticated={this.props.authenticated} logout = {this.props.logout} />
        <div>
            {this.state.infoHidden == false ? 
            <Paper elevation={3} variant="outlined" 
              style={{height: '670px', width: '450px', position: 'absolute', zIndex: '2', top: '15%', left: '7%'}}
              /> : null
            }
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