import { getCurrentISSLocation } from '../services/issAPI';

export const REQUEST_ISS_LOCATION = 'REQUEST_ISS_LOCATION';
export const REQUEST_ISS_LOCATION_SUCCESS = 'REQUEST_ISS_LOCATION_SUCCESS';
export const REQUEST_ISS_LOCATION_ERROR = 'REQUEST_ISS_LOCATION_ERROR';

export const requestISSLocation = () => ({
  type: REQUEST_ISS_LOCATION,
  payload: {
    isFetching: true,
  },
});

export const requestISSLocationSuccess = ({ iss_position: issPosition }) => ({
  type: REQUEST_ISS_LOCATION_SUCCESS,
  payload: {
    latitude: issPosition.latitude,
    longitude: issPosition.longitude,
    isFetching: false,
  },
});

export const requestISSLocationError = (error) => ({
  type: REQUEST_ISS_LOCATION_ERROR,
  payload: { error, isFetching: false },
});

export const fetchISSLocation = () => (dispatch) => {
  dispatch(requestISSLocation());
  getCurrentISSLocation()
    .then((issLocationResponse) => dispatch(
      requestISSLocationSuccess(issLocationResponse),
    ))
    .catch((issLocationError) => dispatch(
      requestISSLocationError(issLocationError),
    ));
};