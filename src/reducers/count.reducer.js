 
export const productsInitialState = [];

const countSlice = (state = 0, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD":
      return state + action.payload.count;
    case "SUB":
      return state - action.payload.count;
    case "ZERO":
      return action.payload.count;
    default:
      return state;
  }
};

export default countSlice;
