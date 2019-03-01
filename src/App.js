import React, { Component } from 'react';
import swal from 'sweetalert';
import Nav from './Nav';
import ReminderGroupList from './ReminderGroupList';
import SelectGroupList from './SelectGroupList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reminderList:
        [{
          오늘할일: [{ title: '쓰레기치우기', value: '현관앞 쓰레기 치우기', date: '', toggle: false },
          { title: '쓰레기치우기', value: '현관앞 쓰레기 치우기', date: '', toggle: false }],
          내일할일: [{ title: '공부하기', value: 'react공부하기', date: '', toggle: false }],
        }],
      targetList: null
    }
  }
  //온클릭 이벤트 후에 반환 이름 저장
  groupNameClickHandler = (event, target) => {
    this.targetListUpdate(target);
  }
  //타겟리스트에 클릭한 리스트 저장
  targetListUpdate = (target) => {
    let targetList = this.state.reminderList[0][target];
    this.setState({ targetList: targetList })
    //console.log(this.state)
  }

  //grubList 추가후 SetState
  groupListAdd = (title) => {

    let obj = {};
    obj[title] = [];
    let copy = Object.assign(this.state.reminderList[0],obj);

    this.setState({reminderList : [copy]});
  }
//---------------------------------------------------------------------------
  //공용
  //그룹 리스트 추가 클릭.
  buttonClickHandler = (target) => {
    if (target === 'group') {
      swal({
        text: "어떤 일을 추가할까요 ?",
        content: 'input',
        buttons: {
          confirm: {
            value: 'DEFAULT_INPUT_TEXT',
          },
        },
      })
        .then((value) => {
          if (value) {
            this.groupListAdd(value);
            swal("추가 완료!", "리스트를 확인해주세요 ^^", "success");
          }
        });
    } else {

    }
//-------------------------------------------------------------------------
//selectgroupList


  }
  render() {
    return (
      <div className="container">
        <div className="row back">
          <div className='col-xs-6 col-md-4 groupList'>
            <Nav />
            <ReminderGroupList
              groupList={this.state.reminderList[0]}
              groupNameClickHandler={this.groupNameClickHandler}
              buttonClickHandler={this.buttonClickHandler}>
            </ReminderGroupList>
          </div>
          <div className='col-xs-12 col-md-8 reminderListBox'>
            <SelectGroupList targetList={this.state.targetList}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
