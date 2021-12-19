import React from 'react';
import {Reply} from '../Reply/Reply';

export const RepliesList = (props) => {
  return (
    <div>
      {props.repliesArr.map(item => (
        <React.Fragment key={item.id}>
          <Reply reply={item}/>
        </React.Fragment>
      ))}
    </div>
  );
};
