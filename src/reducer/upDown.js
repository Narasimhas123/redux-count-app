const initialstate = 0;

const changeTheNumber = (state = initialstate, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

export default changeTheNumber;
