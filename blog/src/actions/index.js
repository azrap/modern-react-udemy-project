import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => {
  return async function (dispatch, getState) {
    const response = await jsonPlaceholder.get("/post");
    return {
      type: "FETCH_POSTS",
      payload: response,
    };
  };
};


}