import {getComments, getReplies} from "./actions";

export const fetchGetComments = () => (dispatch) => {
  fetch( `${process.env.REACT_APP_API_KEY}/comments`)
      .then(response => response.json())
      .then(comments => dispatch(getComments(comments)))
};

export const fetchGetReplies = () => (dispatch) => {
  fetch( `${process.env.REACT_APP_API_KEY}/replies`)
      .then(response => response.json())
      .then(replies => dispatch(getReplies(replies)))
};

export const fetchCreateComment = (data) => (dispatch) => {
  fetch( `${process.env.REACT_APP_API_KEY}/comments`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(() => dispatch(fetchGetComments()))
};

export const fetchCreateReply = (data, commentId) => (dispatch) => {
  fetch( `${process.env.REACT_APP_API_KEY}/comments/${commentId}/replies`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(() => dispatch(fetchGetReplies()))
};

export const fetchDeleteComment = (commentId) => (dispatch) => {
  fetch( `${process.env.REACT_APP_API_KEY}/comments/${commentId}`, {
    method: 'DELETE',
  }).then(() => dispatch(fetchGetComments()))
};

export const fetchDeleteReply = (replyId) => (dispatch) => {
  fetch( `${process.env.REACT_APP_API_KEY}/replies/${replyId}`, {
    method: 'DELETE',
  }).then(() => dispatch(fetchGetReplies()))
};

export const fetchEditComment = (data, commentId) => (dispatch) =>{
  fetch( `${process.env.REACT_APP_API_KEY}/comments/${commentId}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(() => dispatch(fetchGetComments()))
};
