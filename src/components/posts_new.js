import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

class PostsNew extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props).then(() => {
      this.context.router.push('/posts');
    })
  }

  render() {
    const {fields: {title, categories, content}, handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`} >
          <label htmlFor="post-title">Title</label>
          <input id="post-title" type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label htmlFor="post-categories">Categories</label>
          <input id="post-categories" type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label htmlFor="post-content">Content</label>
          <textarea id="post-content" className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Create post</button>
        <Link to="/posts" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = 'Title cannot be blank'
  }

  if(!values.categories) {
    errors.categories = 'Categories cannot be blank'
  }

  if(!values.content) {
    errors.content = 'Content cannot be blank'
  }

  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, {createPost})(PostsNew);