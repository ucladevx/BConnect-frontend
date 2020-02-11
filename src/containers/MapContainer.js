import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchMarkers } from '../reducers/map';
import Map from '../components/Map';


class MapContainer extends Component {
  componentWillMount() {
      this.props.getMarkers();
  }

  render() {
    return (
      <Map
        markers={this.props.markers}
      />
    );
  }
}

const mapStateToProps = state => ({
  markers: state.mapReducer.markers,
});

const mapDispatchToProps = dispatch => ({
  getMarkers: () => {
    dispatch(fetchMarkers());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);