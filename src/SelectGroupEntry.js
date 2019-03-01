import React from 'react';

const SelectGroupEntry = (props) => {
  
  return (
    <div className='selectEntry'>
      {
        props.selectGroup.title
      }
    </div>
  )
};

export default SelectGroupEntry;
