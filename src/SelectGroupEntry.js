import React from 'react';

const SelectGroupEntry = (props) => {
  const listNameClick = (e) => {
    props.listNameClick(e, props.selectGroup.index)
  }

  return (
    <div className='selectEntry' onClick={listNameClick} toggle='props.selectGroup.toggle'>
      <span data-toggle="tooltip" data-placement="top" title={props.target}>
        {
          props.selectGroup.title
        }
      </span>
    </div>
  )
};

export default SelectGroupEntry;
