import React from 'react';
import { connect } from 'react-redux';
import { setCurrentDate } from '../actions';
import './App.css';

import NavigationPanel from './NavigationPanel';
import InputPanel from './InputPanel';
import TabPanel from './TabPanel';

class App extends React.Component {

  componentDidMount() {
    const now = new Date();
    this.props.setCurrentDate(now);
  }
  
  render() {
    const { currentUser } = this.props;

    return (
      <div className="app">
        <NavigationPanel user={currentUser} />
        <InputPanel />
        <TabPanel />
      </div>
    )
  }
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(
  mapStateToProps,
  { setCurrentDate }
)(App);
