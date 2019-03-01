import React from 'react';
import ReminderGrubEntry from './ReminderGrubEntry'

const grubCheck = function(reminderList) {
  if(reminderList){
    return Object.keys(reminderList)
  } else {
    return null;
  }
} 

const ReminderGrubList = (props) => {
  let array = grubCheck(props.grubList)

  if(array){
    return (
      <div>
      {
        array.map((ele, i) => <ReminderGrubEntry key={i} grubName={ele} grubNameClickHandler={props.grubNameClickHandler}/>)
      }
      </div>
    );
  } else {
    return (
    <div>
      일정을 추가해주세요!
    </div>
    )
  } 

};

export default ReminderGrubList;
