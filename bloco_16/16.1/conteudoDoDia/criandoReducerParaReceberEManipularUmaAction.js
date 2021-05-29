const defaultState = { login: false };
const reducer = (state = defaultState, action) => {
  // Change code below this line
  // Change code above this line
  switch (action.type) {
    case 'LOGIN':
      return { login: true };
    default:
      return state;
  }
};
const store = Redux.createStore(reducer);
const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
