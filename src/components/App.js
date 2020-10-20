import React from 'react';
import { connect } from 'react-redux';
import { setCurrentDate } from '../actions';
import './App.css';

import TabPanel from './TabPanel';
import InputPanel from './InputPanel';
import RecordPanel from './RecordPanel';
import MypagePanel from './MypagePanel';

class App extends React.Component {

  componentDidMount() {
    const now = new Date();
    this.props.setCurrentDate(now);
  }

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
  selectedTab: state.tab.selected
});

export default connect(
  mapStateToProps,
  { setCurrentDate }
)(App);
