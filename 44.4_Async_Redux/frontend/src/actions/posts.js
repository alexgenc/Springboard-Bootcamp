import axios from "axios";
import {
  REMOVE_POST,
  ADD_POST,
  UPDATE_POST,
  VOTE,
  ADD_COMMENT,
  REMOVE_COMMENT,
  FETCH_POST
} from "./types";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";

// getPost action
function getPost(post) {
  return {
    type: FETCH_POST,
    post,
  };
}

// async getPostFromAPI thunk
export function getPostFromAPI(id) {
  return async function (dispatch) {
    const response = await axios.get(`${API_URL}/${id}`);
    return dispatch(getPost(response.data));
  };
}

// addPost action
function addPost(post) {
  return {
    type: ADD_POST,
    post
  };
}

// async sendPostToAPI thunk
export function sendPostToAPI(title, description, body) {
  return async function (dispatch) {
    const response = await axios.post(`${API_URL}`, {
      title,
      description,
      body
    });
    return dispatch(addPost(response.data));
  };
}

// removePost action
function removePost(postId) {
  return {
    type: REMOVE_POST,
    postId
  };
}

// async removePostFromAPI thunk
export function removePostFromAPI(id) {
  return async function (dispatch) {
    await axios.delete(`${API_URL}/${id}`);
    return dispatch(removePost(id));
  };
}

// updatePost action
function updatePost(post) {
  return {
    type: UPDATE_POST,
    post,
  };
}

// async updatePostInAPI thunk
export function updatePostInAPI(id, title, description, body) {
  return async function (dispatch) {
    const response = await axios.put(`${API_URL}/${id}`, {
      title,
      description,
      body
    });
    return dispatch(updatePost(response.data));
  };
}

// vote action
function vote(postId, votes) {
  return {
    type: VOTE,
    postId: postId,
    votes: votes,
  };
}

// async sendVoteToAPI thunk
export function sendVoteToAPI(id, direction) {
  return async function (dispatch) {
    const response = await axios.post(`${API_URL}/${id}/vote/${direction}`);
    return dispatch(vote(id, response.data.votes));
  };
}

// addComment action
function addComment(postId, comment) {
  return { type: ADD_COMMENT, postId, comment };
}

// async sendCommentToAPI thunk
export function sendCommentToAPI(postId, text) {
  return async function (dispatch) {
    const result = await axios.post(`${API_URL}/${postId}/comments/`, { text });
    return dispatch(addComment(postId, result.data));
  };
}

// removeComment action
function removeComment(postId, commentId) {
  return {
    type: REMOVE_COMMENT,
    postId,
    commentId,
  };
}

// async removeCommentFromAPI thunk
export function removeCommentFromAPI(postId, commentId) {
  return async function (dispatch) {
    await axios.delete(`${API_URL}/${postId}/comments/${commentId}`);
    return dispatch(removeComment(postId, commentId));
  };
}






