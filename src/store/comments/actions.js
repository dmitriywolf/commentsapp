import {GET_COMMENTS, GET_REPLIES} from "./types";

export const getComments = (comments) => ({
  type: GET_COMMENTS,
  payload: comments
});

export const getReplies = (replies) => ({
  type: GET_REPLIES,
  payload: replies
});
