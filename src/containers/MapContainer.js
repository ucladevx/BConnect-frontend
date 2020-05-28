import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchMarkers } from '../reducers/map';
import { logout } from '../reducers/auth'
// import Divider from '@material-ui/core/Divider';
import {withRouter} from 'react-router-dom'
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import Zoom from '@material-ui/core/Zoom';

import Map from '../Components/Map';
// import Navbar from '../Components/Navbar'
// import Search from '../Components/Search'
import Filter from '../Components/Filter'

class LandingContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      infoHidden: true,
      data: {},
      showSearch: false
    }
  }
  
  componentWillMount() {
      if(!this.props.authenticated){
        this.props.history.push("/")
      }

      this.props.getMarkers();
      //console.log(this.props.markers)
  }

  toggleSearch = () => {
    this.setState({showSearch: !this.state.showSearch})
  }

  toggle = (data) => {
    this.setState({infoHidden: false, data})
  }

  //TODO: move out the paper element and its children as its own component/class
  render() {
    return (
      <div>
            <Filter markers={this.props.markers} />
            <Map  toggle={this.toggle} markers={this.props.markers} />
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