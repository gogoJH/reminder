import React from 'react';


const ReminderGrubEntry = (props) => {
  const grubNameClickHandler= (event) => {
    props.grubNameClickHandler(event, props.grubName)
  }
  return <div onClick={grubNameClickHandler}>{props.grubName}</div>

};

export default ReminderGrubEntry;
