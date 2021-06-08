const INITIAL_STATE = {};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN':
    return action.value;
  default:
    return state;
  }
}

export default loginReducer;