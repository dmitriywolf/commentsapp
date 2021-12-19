import {getComments, getReplies} from "./actions";

export const fetchGetComments = () => (dispatch) => {
  fetch( `http://localhost:3000/comments`)
      .then(response => response.json())
      .then(comments => dispatch(getComments(comments)))
};

export const fetchGetReplies = () => (dispatch) => {
  fetch( `http://localhost:3000/replies`)
      .then(response => response.json())
      .then(replies => dispatch(getReplies(replies)))
};

export const fetchCreateComment = (data) => (dispatch) => {
  fetch( `http://localhost:3000/comments`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(() => dispatch(fetchGetComments()))
};

export const fetchCreateReply = (data, commentId) => (dispatch) => {
  fetch( `http://localhost:3000/comments/${commentId}/replies`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(() => dispatch(fetchGetReplies()))
};

export const fetchDeleteComment = (commentId) => (dispatch) => {
  fetch( `http://localhost:3000/comments/${commentId}`, {
    method: 'DELETE',
  }).then(() => dispatch(fetchGetComments()))
};

export const fetchDeleteReply = (replyId) => (dispatch) => {
  fetch( `http://localhost:3000/replies/${replyId}`, {
    method: 'DELETE',
  }).then(() => dispatch(fetchGetReplies()))
};

export const fetchEditComment = (data, commentId) => (dispatch) =>{
  fetch( `http://localhost:3000/comments/${commentId}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(() => dispatch(fetchGetComments()))
};

export const fetchEditReply = (data, repliesId) => (dispatch) =>{
  fetch( `http://localhost:3000/comments/replies/${repliesId}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(() => dispatch(fetchGetReplies()))
};
