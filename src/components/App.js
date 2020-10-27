import React from 'react';
import { connect } from 'react-redux';
import firebase from '../firebase';
import { setTodaysDate, setCurrentDate, setRecords } from '../actions';
import './App.css';

import TabPanel from './TabPanel';
import InputPanel from './InputPanel';
import RecordPanel from './RecordPanel';
import MypagePanel from './MypagePanel';

class App extends React.Component {
  state = {
    user: this.props.currentUser,
    recordsRef: firebase.database().ref('records'),
  }

  componentDidMount() {
    const { user } = this.state;
    const now = new Date();
    this.props.setTodaysDate(now);
    this.props.setCurrentDate(now);
    this.addRecordListener(user.uid);
  }

  addRecordListener = userId => {
    const ref = this.state.recordsRef;
    ref.child(userId).on('value', snap => {
      if (snap.val() !== null) {
        const records = new Map(Object.entries(snap.val()));
        this.props.setRecords(records);
      }
    });
  };

  displayMainPanel = () => {
    switch(this.props.selectedTab) {
      case 'input':
        return <InputPanel />
      case 'record':
        return <RecordPanel  />
      case 'mypage':
        return <MypagePanel  />
      default:
        return null
    }
  };
  
  render() {
    return (
      <div className="app">
        {this.displayMainPanel()}
        <TabPanel />
      </div>
    )
  }
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  selectedTab: state.tab.selected
});

export default connect(
  mapStateToProps,
  { setTodaysDate, setCurrentDate, setRecords }
)(App);
