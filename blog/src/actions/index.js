import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => {
  return function () {
    return {
      type: "FETCH_POSTS",
      payload: "",
    };
  };
};
