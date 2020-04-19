import jsonPlaceholder from "../api/jsonPlaceholder";
import _ from "lodash";

//the below is a combo action creator. Be sure to create the indiviual ones too
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  console.log("before fetch");
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => {
  return async function (dispatch, getState) {
    const response = await jsonPlaceholder.get("/posts");
    console.log("response data from inside fetchPosts", response.data);

    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
  };
};

export const fetchUser = function (id) {
  return async function (dispatch, getState) {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
      type: "FETCH_USER",
      payload: response.data,
    });
  };
};

// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data,
//   });
// });
