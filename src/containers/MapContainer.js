import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchMarkers } from '../reducers/map';
import { logout, addInfo } from '../reducers/auth'
import {withRouter} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';

import Map from '../Components/Map';
import Filter from '../Components/Filter/FilterBar'

class LandingContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      center: {},
      selected: false
    }
  }
  
  componentWillMount() {
      if(!this.props.authenticated){
        this.props.history.push("/")
      }

      this.props.getMarkers();
      //console.log(this.props.markers)
  }

  componentDidUpdate(){
    if(!this.props.authenticated){
      setTimeout(()=>{
        this.props.history.push("/")
      }, 500)
    }
  }

  toggle = (data) => {
    this.setState({data, selected: true})
  }

  render() {
    return (
      <div>
            <Filter updateUser={this.props.handleInfo} user={this.props.user}
                 markers={this.props.markers} logout={this.props.logout} />

            <Map  toggle={this.toggle} markers={this.props.markers} data={this.state.center} 
                selected={this.state.selected}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.authReducer.authenticated,
  markers: state.mapReducer.markers,
  user: state.authReducer.user
});

const mapDispatchToProps = dispatch => ({
  getMarkers: () => {
    dispatch(fetchMarkers());
  },
  logout : () => {
    dispatch(logout());
  },
  handleInfo: (data) => {
    dispatch(addInfo(data));
}
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingContainer));