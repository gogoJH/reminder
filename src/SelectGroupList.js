import React from 'react';
import SelectGroupEntry from './SelectGroupEntry'

const SelectGroupList = (props) => {

  console.log(props.targetList)

  if(props.targetList){
    return (
      <div>
        {
          props.targetList.map((ele,i)=> {
          return <SelectGroupEntry key={i} className='selectEntry' selectGroup={ele}/>})
        }
      </div>
    )
  } else {
    return (
      <div className='selectEntry'>
        할일을 선택해주세요 ^^
      </div>
    )  
  }

};

export default SelectGroupList;
