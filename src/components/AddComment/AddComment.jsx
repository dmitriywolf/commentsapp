import React, {useState} from 'react';
import faker from 'faker';
import {fetchCreateComment} from '../../store/comments/operations.js';
import {useDispatch} from "react-redux";

import './AddComment.scss';

export const AddComment = () => {
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState('');

  const handleChange = (e) => {
    setCommentText(e.target.value)
  };

  const sendComment = (e) => {
    e.preventDefault();
    setCommentText('');

    const data = {
      name: faker.name.findName(),
      body: commentText,
      date: new Date().toLocaleDateString(),
      avatar: faker.image.image(120, 120)
    };
      dispatch(fetchCreateComment(data));
    };

  return (
      <div className='addComment__wrap'>
        <div className='avatar avatar--comment'>
          <img src={faker.image.imageUrl(120, 120)} alt='alt'/>
        </div>
        <div className='addComment__form-wrap'>
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
