import React from 'react';
import SelectGroupEntry from './SelectGroupEntry'

const SelectGroupList = (props) => {

  const buttonClickHandler = () =>{
    props.buttonClickHandler('select');
  }

  if(props.targetList){
    return (
      <div>
        {
          props.targetList.map((ele,i)=> {
          return <SelectGroupEntry key={i} className='selectEntry' selectGroup={ele} target={props.target} listNameClick={props.listNameClick}/>})
        }
        <button type="button" className="btn btn-warning btn-xs" onClick={buttonClickHandler} >+</button>
      </div>
      
    )
  } else {
    return (
      <div>
        <div className='selectEntry'>그룹을 선택하시거나 검색해주세요 !</div>
      </div>
    )  
  }

};

export default SelectGroupList;
