import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    const data = this.props.fetchPosts();
    console.log(data);
  }

  render() {
    console.log(this.props.posts);
    return "boogaloo";
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
