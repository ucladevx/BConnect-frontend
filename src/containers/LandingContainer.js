import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchMarkers } from '../reducers/map';
import { logout } from '../reducers/auth'
import Map from '../components/Map';
import Navbar from '../components/Navbar'
import {withRouter} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';



class LandingContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      infoHidden: true,
      data: {}
    }
  }
  
  componentWillMount() {
      this.props.getMarkers();
  }

  toggle = (data) => {
    this.setState({infoHidden: false, data})
  }

  //TODO: move out the paper element and its children as its own component/class
  render() {
    return (
      <div>
        <Navbar authenticated={this.props.authenticated} logout = {this.props.logout} />
        <div>
            <Zoom in={!this.state.infoHidden}>
                <Paper elevation={3} variant="outlined" 
              style={{height: '70%', width: '25%', position: 'absolute', flexDirection: 'column', justifyContent: 'center',
                zIndex: '2', top: '15%', left: '7%', minWidth: '200px', minHeight: '250px', display: 'flex', padding: '6px'}}
              >
                <span style={{float: 'right', margin: '7px'}} onClick={()=>{this.setState({infoHidden: true})}}>X</span>
                <Typography variant='h3'> {this.state.data.name} </Typography>
                <Typography> {this.state.data.major} </Typography>
                <Typography> Location: {this.state.data.lng},{this.state.data.lng} </Typography>
                <img style={{height: '40%', width: '70%', margin: 'auto'}} src={'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png'}/>
                <Typography> Bio: Duis et laoreet ante. Curabitur facilisis rutrum ultrices. Lorem ipsum dolor si
                  t amet, consectetur adipiscing elit. Nunc dapibus nisi a risus mattis ullamcorper. Interdum et malesuada fames ac ante
                   ipsum primis in faucibus. Fusce porta magna nibh, ut scelerisque ex luctus luctus. 
                   </Typography>
                   <Button variant="contained" color="primary">
                    Connect now!
                  </Button>
              </Paper> 
            </Zoom>
          <Map  toggle={this.toggle} markers={this.props.markers} />
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