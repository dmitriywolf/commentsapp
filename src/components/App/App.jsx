import React from 'react';
import {CommentsList} from '../CommentsList/CommentsList';
import {AddComment} from '../AddComment/AddComment';
import './App.scss';

function App() {
  return (
      <div className='app__container'>
        <AddComment />
        <CommentsList/>
      </div>
  );
}

export default App;
