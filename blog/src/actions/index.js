import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => {
  return function (dispatch, getState) {
    const promise = jsonPlaceholder.get("/post");
    return {
      type: "FETCH_POSTS",
      payload: " ",
    };
  };
};
