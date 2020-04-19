export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      console.log("state from inside the user resducer", state);
      return [...state, action.payload];
    default:
      return state;
  }
};
