// Define a constant for increment action types
const INCREMENT = 'INCREMENT';
// Define a constant for decrement action types
const DECREMENT = 'DECREMENT';

// Define the counter reducer which will increment or 
// decrement the state based on the action it receives
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// Define an action creator for incrementing
const incAction = () => ({ type: INCREMENT });

// Define an action creator for decrementing
const decAction = () => ({ type: DECREMENT });

// Define the Redux store here, passing in your reducers
const store = Redux.createStore(counterReducer);