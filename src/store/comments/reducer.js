import {GET_COMMENTS, GET_REPLIES} from "./types";

const initialState = {
  comments: [],
  replies: [],
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {...state, comments: action.payload};
    case GET_REPLIES:
      return {...state, replies: action.payload};
    default:
      return state;
  }
};

