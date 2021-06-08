const INITIAL_STATE = {
  counter: 0,
};

function clickReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_CLICK':
    return {
      counter: state.counter + 5,
    }
  default:
    return state;
  }
}

export default clickReducer;
