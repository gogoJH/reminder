import React, { Component } from 'react';
import swal from 'sweetalert';
import Nav from './Nav';
import ReminderGrubList from './ReminderGrubList';
import SelectGrupList from './SelectGrupList';

class App extends Component {
  constructor(porps) {
    super(props);
    this.state = {
      reminderList:
        [{
          오늘할일: [{ title: '쓰레기치우기', value: '현관앞 쓰레기 치우기', date: '', toggle: false },
                    { title: '쓰레기치우기', value: '현관앞 쓰레기 치우기', date: '', toggle: false }],
          내일할일: [{ title: '공부하기', value: 'react공부하기', date: '', toggle: false }],
        }],
      targetList = null
    }
  }


  grubCheck = (reminderList) => {
    return Object.keys(reminderlist[0])
  } 

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className='col-xs-6 col-md-4'>
            <Nav />
            <ReminderGrubList grubList={grupCheck(this.state.reminderList)}/>
          </div>
          <div className='col-xs-12 col-md-8'>
            <SelectGrupList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
