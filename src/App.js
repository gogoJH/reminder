import React, { Component } from 'react';
//import swal from 'sweetalert';
import Nav from './Nav';
import ReminderGrubList from './ReminderGrubList';
import SelectGrupList from './SelectGrupList';

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
      targetList : null
    }
  }

  grubNameClickHandler = (event, target) => {
    console.log(target);
  }  

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className='col-md-4'>
            <Nav />
            <ReminderGrubList grubList={this.state.reminderList[0]} grubNameClickHandler={this.grubNameClickHandler}/>
          </div>
          <div className='col-md-8'>
            <SelectGrupList />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
