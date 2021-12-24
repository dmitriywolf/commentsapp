import React, {useState} from 'react';
import faker from 'faker';
import {fetchCreateReply, fetchEditComment} from '../../store/comments/operations.js';
import {useDispatch} from "react-redux";

export const EditBox = ({isEditComment = false, commentId, name, avatar, commentOwner, closeEditBox, body}) => {
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState(body);

  const handleChange = (e) => {
    setCommentText(e.target.value)
  };

  const sendComment = (e) => {
    e.preventDefault();
    setCommentText('');

    if(isEditComment) {
      const data = {
        name: name,
        body: commentText,
        date: new Date().toLocaleDateString(),
        avatar: avatar
      };
      dispatch(fetchEditComment(data, commentId))
    } else {
      const data = {
        name: faker.name.findName(),
        body: commentText,
        date: new Date().toLocaleDateString(),
        avatar: faker.image.image(120, 120),
      };
      dispatch(fetchCreateReply(data, commentId));
    }
    closeEditBox();
  };

  return (
      <div className='editBox__wrap'>
        <div className='editBox__form-wrap'>
          <div className='form--reply'>
            {!isEditComment ? (<span className='sub__text'>{`to ${commentOwner}`}</span>) : null}
            <button className='btn--activities' onClick={closeEditBox}>Cancel</button>
          </div>
          <form className='form'>
            <textarea className='textarea' placeholder='Your message' value={commentText} onChange={handleChange}>
            </textarea>
            <button className='btn--send' onClick={sendComment} disabled={!commentText}>
              Send
          </button>
          </form>
        </div>
      </div>
  )
};
