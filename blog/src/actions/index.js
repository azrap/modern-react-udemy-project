import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => {
  return async function (dispatch, getState) {
    const response = await jsonPlaceholder.get("/posts");

    console.log("response.data inside action creator", response.data);

    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
  };
};
