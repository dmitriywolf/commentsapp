import React, {useEffect} from 'react';
import {Comment} from '../Comment/Comment';
import {fetchGetComments} from '../../store/comments/operations.js';
import {useDispatch, useSelector} from "react-redux";
import {fetchGetReplies} from "../../store/comments/operations";

import './CommentsList.scss';
export const CommentsList = () => {
  const dispatch  = useDispatch();
  const comments = useSelector(state => state.state.comments);

  useEffect(() => {
    dispatch(fetchGetComments());
    dispatch(fetchGetReplies());
  }, [dispatch]);

  return (
      <div className='comments__list'>
        {comments.map(item => (
            <React.Fragment key={item.id}>
              <Comment comment={item}/>
            </React.Fragment>
        ))}
      </div>
  )
};
