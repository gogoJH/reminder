import React from 'react';
import ReminderGroupEntry from './ReminderGroupEntry'

const groupCheck = function(reminderList) {
  if(reminderList){
    return Object.keys(reminderList)
  } else {
    return null;
  }
} 

const ReminderGroupList = (props) => {
  let array = groupCheck(props.groupList)
  const buttonClickHandler = () => (props.buttonClickHandler('group'));

  if(array){
    return (
      <div className='groupListBox'>
      {
        array.map((ele, i) => <ReminderGroupEntry 
                                    key={i} groupName={ele} 
                                    groupNameClickHandler={props.groupNameClickHandler}/>)
      }
      <button type="button" className="btn btn-warning btn-xs" onClick={buttonClickHandler}>+</button>
      </div>
      
    );
  } else {
    return (
    <div className='groupEntry'>
      일정을 추가해주세요!
      <button type="button" className="btn btn-warning btn-xs" onClick={buttonClickHandler}>+</button>
    </div>
    
    )
  } 

};

export default ReminderGroupList;
