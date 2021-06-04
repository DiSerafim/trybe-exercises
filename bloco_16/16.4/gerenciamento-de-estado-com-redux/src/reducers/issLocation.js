import {
  REQUEST_ISS_LOCATION,
  REQUEST_ISS_LOCATION_SUCCESS,
  REQUEST_ISS_LOCATION_ERROR,
} from '../actions';

const INITIAL_ISS_LOCATION_STATE = {
  latitude: -17.742777,
  longitude: -46.175278,
};

const issLocation = (state = INITIAL_ISS_LOCATION_STATE, action) => {
  switch (action.type) {
  case REQUEST_ISS_LOCATION:
    return {
      ...state,
      isFetching: action.payload.isFetching,
    };
  case REQUEST_ISS_LOCATION_SUCCESS:
    console.log(action.payload);
    return {
      ...state,
      latitude: action.payload.latitude,
      longitude: action.payload.longitude,
      isFetching: action.payload.isFetching,
    };
  case REQUEST_ISS_LOCATION_ERROR:
    return {
      ...state,
      error: action.payload.error,
      isFetching: action.payload.isFetching,
    };
  default:
    return state;
  }
};

export default issLocation;
