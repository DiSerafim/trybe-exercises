import React from 'react';
import Marker from 'pigeon-marker';
import { Map } from 'pigeon-maps';
import { connect } from 'react-redux';
import { fetchISSLocation as fetchISSLocationThunk } from '../actions';

import latitudeImg from '../assets/latitude.svg';
import longitudeImg from '../assets/longitude.svg';
import { Component } from 'react';

const TWO_SECONDS = 2000;

class ISSLocation extends Component {
  componentDidMount() {
    const { fetchISSLocation } = this.props;
    this.time = setInterval(() => {
      fetchISSLocation();
    }, TWO_SECONDS);
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    const { latitude, longitude } = this.props;

    return (
      <main>
        <div className="map">
          <Map
            center={ [0, 0] }
            defaultWidth={ 800 }
            width = { 727 }
            height = { 600 }
            minZoom={ 0.1 }
            maxZoom={ 80 }
            zoom={ 1.5 }
          >
            <Marker anchor={ [latitude, longitude] } />
          </Map>
        </div>
        <section className="lat-long-section">
          <div className="lat-long">
            <img
              className="lat-long-img"
              src={ latitudeImg }
              width={ 24 }
              height={ 24 }
              alt="latitude"
            />
            <span>{latitude}</span>
          </div>
          <div className="lat-long">
            <img
              className="lat-long-img"
              src={ longitudeImg }
              width={ 24 }
              height={ 24 }
              alt="longitude"
            />
            <span>{longitude}</span>
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  latitude: state.issLocation.latitude,
  longitude: state.issLocation.longitude,
});

const mapDispatchToProps = (dispatch) => ({
  fetchISSLocation: () => dispatch(fetchISSLocationThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);