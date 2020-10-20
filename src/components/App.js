import React from 'react';
import { connect } from 'react-redux';
import { setCurrentDate } from '../actions';
import './App.css';

import NavigationPanel from './NavigationPanel';
import TabPanel from './TabPanel';
import InputPanel from './InputPanel';
import ChartPanel from './ChartPanel';

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
        return <ChartPanel  />
      default:
        return null
    }
  };
  
  render() {
    const { currentUser } = this.props;

    return (
      <div className="app">
        <NavigationPanel user={currentUser} />
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
  { setCurrentDate }
)(App);
