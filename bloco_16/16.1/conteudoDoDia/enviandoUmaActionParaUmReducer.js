const store = Redux.createstore(
  (state = {login: false}) => state
);
const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction());