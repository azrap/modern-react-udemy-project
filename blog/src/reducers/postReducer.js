export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      // const payload = action.payload;
      // console.log("action.payload inside switch", payload);
      return action.payload;
    default:
      return state;
  }
};
