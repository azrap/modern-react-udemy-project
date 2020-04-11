export default (state = [], action) => {
  console.log("action type", action.type);
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
