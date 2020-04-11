import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => {
  return async function (dispatch, getState) {
    console.log("hi");
    const response = await jsonPlaceholder.get("/posts");

    return {
      type: "FETCH_POSTS",
      payload: response,
    };
  };
};
