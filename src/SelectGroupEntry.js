import React from 'react';

const SelectGroupEntry = (props) => {
  
  return (
    <div className='selectEntry' onClick={props.listNameClick} >
      <span data-toggle="tooltip" data-placement="top" title={props.target}>
        {
          props.selectGroup.title
        }
      </span>
    </div>
  )
};

export default SelectGroupEntry;
