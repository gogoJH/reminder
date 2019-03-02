import React, { Component } from 'react';
import swal from 'sweetalert';
import Nav from './Nav';
import ReminderGroupList from './ReminderGroupList';
import SelectGroupList from './SelectGroupList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      target: null,
      reminderList:
        [{
          오늘할일: [{ title: '쓰레기치우기', value: '현관앞 쓰레기 치우기', date: '', toggle: false },
                    { title: '쓰레기치우기', value: '현관앞 쓰레기 치우기', date: '', toggle: false }],
          내일할일: [{ title: '공부하기', value: 'react공부하기', date: '', toggle: false }],
        }],
      targetList: null,
      search: null
    }
  }
  //-----------------------------------------------------------------------------
  //group
  //온클릭 이벤트 후에 반환 이름 저장
  groupNameClickHandler = (event, target) => {
    this.targetListUpdate(target);
  }
  //타겟리스트에 클릭한 리스트 저장
  targetListUpdate = (target) => {
    let targetList = this.state.reminderList[0][target];
    this.setState({ target: target, targetList: targetList })
    //console.log(this.state)
  }

  //grubList 추가후 SetState
  groupListAdd = (title) => {

    let obj = {};
    obj[title] = [];
    let copy = Object.assign(this.state.reminderList[0], obj);

    this.setState({ reminderList: [copy] });
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

      let templet = { title: '', value: '', date: '', toggle : false};

      swal({
        text: "해야 할일이 무엇인가요 ??",
        content: 'input',
        buttons: {
          confirm: {
            value: 'DEFAULT_INPUT_TEXT',
          },
        },
      }).then((value) => {

        if (value) {
          templet.title = value;
        }

      }).then(() => {

        swal({
          text: "추가하실 내용이 있으신가요 ??",
          content: 'input',
          buttons: {
            confirm: {
              value: 'DEFAULT_INPUT_TEXT',
            },
          },
        }).then((value) => {

          templet.value = value;

        }).then(() => {
        this.selectGroupListAdd(templet)
        })

      })

    }
  }
  //-------------------------------------------------------------------------
  //selectgroupList

  //리스트 클릭했을때 줄가게
  listNameClick = (e) => {
    if (e.target.style.textDecoration) {
      e.target.style.textDecoration = '';
    } else {
      e.target.style.textDecoration = 'line-through';

    }
  }
  //완성된 템플릿 저장
  selectGroupListAdd = (templet) => {
    let list = Object.create(this.state.reminderList);
    list[0][this.state.target].push(templet);
    
    this.setState({reminderList : list});
    
  }

  toggleChange = () => {
    
  }
  //-------------------------------------------------------------------------
  //Nav
  searchBarChangeHandler = (event) => {
    this.setState({ search: event.target.value })

  }

  searchButtonClick = () => {
    let target = this.state.search;
    let list = this.state.reminderList[0];
    let newArray = [];
    //루프돌려서 검색어에 해당하는거 싹다 가져오기;
    if (this.state.search) {

      for (let key in list) {
        newArray = newArray.concat(list[key]);
      }
      //검색어랑 맞는 자료 찾기
      let searchArray = newArray.filter(ele => {
        if (ele.title.includes(target) || ele.title.includes(ele.value)) {
          return ele;
        }
      })
      this.setState({ targetList: searchArray })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row back">
          <div className='col-xs-6 col-md-4 groupList'>
            <Nav searchBarChangeHandler={this.searchBarChangeHandler} searchButtonClick={this.searchButtonClick} />
            <ReminderGroupList
              groupList={this.state.reminderList[0]}
              groupNameClickHandler={this.groupNameClickHandler}
              buttonClickHandler={this.buttonClickHandler}>
            </ReminderGroupList>
          </div>
          <div className='col-xs-12 col-md-8 reminderListBox'>
            <SelectGroupList targetList={this.state.targetList} target={this.state.target} listNameClick={this.listNameClick} buttonClickHandler={this.buttonClickHandler} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
