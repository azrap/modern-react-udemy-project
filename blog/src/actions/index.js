import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => {
  return async function (dispatch, getState) {
    console.log("hi");
    const response = await jsonPlaceholder.get("/posts");

    console.log("response.data inside action creator", response.data);

    return {
      type: "FETCH_POSTS",
      payload: response.data,
    };
  };
};
