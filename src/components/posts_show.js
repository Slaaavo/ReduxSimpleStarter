import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {fetchPost, deletePost} from '../actions/index';

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  static contextTypes = {
    router: PropTypes.object
  };

  onDeleteClick() {
    this.props.deletePost(this.props.params.id).then(() => {
      this.context.router.push('/posts');
    });
  }

  render() {
    const {post} = this.props;

    if (!post || post.id != this.props.params.id) {
      return <div>Loading ...</div>;
    }

    return (
      <div>
        <h2>{post.title}</h2>
        <strong>{post.categories}</strong>
        <p>{post.content}</p>
        <Link to="/posts" className="btn btn-secondary">
          Back
        </Link>
        <button
          onClick={this.onDeleteClick.bind(this)}
          className="btn btn-danger">
          Delete
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.post
  };
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);