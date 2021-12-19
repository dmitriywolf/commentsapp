import React, {useState} from 'react';
import {fetchDeleteComment} from '../../store/comments/operations.js';
import { RepliesList } from '../RepliesList/RepliesList';
import {useDispatch, useSelector} from "react-redux";
import {EditBox} from "../EditBox/EditBox";

import './Comment.scss';

export const Comment = (props) => {
  const dispatch = useDispatch();

  const replies = useSelector(state => state.state.replies);

  const [isReplyComment, setReplyComment] = useState(false);
  const [isEditComment, setIsEditComment] = useState(false);
  const {avatar, body, date, id, name} = props.comment;
  const repliesArr = replies.filter(item => Number(item.commentId) === id);

  const deleteComment = () => {
    dispatch(fetchDeleteComment(id))
  };

  const replyComment = () => {
    setIsEditComment(false);
    setReplyComment(true);
  };

  const closeEditBox = () => {
    setReplyComment(false);
    setIsEditComment(false)
  };

  const editComment = () => {
    setReplyComment(false);
    setIsEditComment(true);
  };

  return (
        <div className='comment__wrap'>
          <div className='avatar avatar--comment'>
            <img src={`${avatar}`} alt={`${name}`}/>
          </div>
          <div className='comment__content-wrap'>
          <div className='comment__content'>
            <div className='comment__header'>
              <h3 className='title'>{name}</h3>
              <span className='sub__text'>{date}</span>
            </div>
            <p className='comment__text'>{body}</p>
            <div className='comment__activities'>
              <button className='btn--activities' onClick={editComment}>Edit</button>
              <button className='btn--activities' onClick={deleteComment}>Delete</button>
              <button className='btn--activities' onClick={replyComment}>Reply</button>
            </div>
          </div>
            {
              isReplyComment && <EditBox commentId={id} commentOwner={name} closeEditBox={closeEditBox}/>
            }
            {
              isEditComment && <EditBox isEditComment commentId={id} name={name} avatar={avatar} body={body} closeEditBox={closeEditBox}/>
            }
            <RepliesList repliesArr={repliesArr}/>
          </div>
     </div>
  )
};
