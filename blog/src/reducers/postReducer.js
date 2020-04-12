export default (state = [], action) => {
  console.log("hi action inside reducer", action);
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
