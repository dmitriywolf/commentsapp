import React, {useState} from 'react';
import './Reply.scss';
import {fetchDeleteReply} from '../../store/comments/operations.js';
import {useDispatch, useSelector} from "react-redux";
import {EditBox} from "../EditBox/EditBox";

export const Reply  = (props) => {
  const dispatch = useDispatch();
  const {avatar, body, commentId, date, id, name} = props.reply;
  const comments = useSelector(state => state.state.comments);
  const [isEditReply, setIsEditReply] = useState(false);
  const commentOwner = comments.find(item => item.id === Number(commentId));

  const deleteReply = () => {
    dispatch(fetchDeleteReply(id));
  };

  const closeEditBox = () => {
    setIsEditReply(false);
  };

  const editReply = () => {
    setIsEditReply(true);
  };

  return (
      <>
        <div className='reply__wrap'>
          <div className='avatar avatar--reply'>
            <img src={`${avatar}`} alt={name}/>
          </div>
          <div className='reply__content-wrap'>
            <div className='reply__content'>
              <div className='reply__header'>
                <h3 className='title'>{name}</h3>
                <span className='sub__text'>{`to ${commentOwner.name}`}</span>
                <span className='sub__text'>{date}</span>
              </div>
              <p className='reply__text'>{body}</p>
              <div className='reply__activities'>
                <button className='btn--activities' onClick={editReply}>Edit</button>
                <button className='btn--activities' onClick={deleteReply}>Delete</button>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
        { isEditReply && <EditBox isEditReply body={body} commentId={id} repliesId={id} name={name} closeEditBox={closeEditBox}/>}
        </>
  )
};
