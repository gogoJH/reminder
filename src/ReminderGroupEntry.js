import React from 'react';


const ReminderGroupEntry = (props) => {
  const groupNameClickHandler= (event) => {
    props.groupNameClickHandler(event, props.groupName)
  }
  return <div onClick={groupNameClickHandler} className='groupEntry'>{props.groupName}</div>

};

export default ReminderGroupEntry;
