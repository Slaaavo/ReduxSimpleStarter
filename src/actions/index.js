import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'key=slaaavo';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

export function fetchPosts() {
  const response = axios.get(`${ROOT_URL}/posts?${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: response
  };
}

export function fetchPost(id) {
  const response = axios.get(`${ROOT_URL}/posts/${id}?${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: response
  };
}

export function createPost(props) {
  const response = axios.post(`${ROOT_URL}/posts?${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: response
  }
}

export function deletePost(id) {
  const response = axios.delete(`${ROOT_URL}/posts/${id}?${API_KEY}`);

  return {
    type: DELETE_POST,
    payload: response
  }
}