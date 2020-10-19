import React from 'react';
import { connect } from 'react-redux';
import { setVisible } from '../actions';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import './App.css';

import NavigationPanel from './NavigationPanel';
import InputPanel from './InputPanel';
import ChartPanel from './ChartPanel';

const App = ({ currentUser, visible, setVisible }) => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation='push'
      icon='labeled'
      inverted
      onHide={() => setVisible(false)}
      vertical
      visible={visible}
      width='thin'
    >
      <Menu.Item as='a'>
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='gamepad' />
        Games
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        Channels
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher dimmed={visible}>
      <div className="app">
        <NavigationPanel user={currentUser} />
        <InputPanel />
        <ChartPanel />
      </div>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  visible: state.sidebar.visible
});

export default connect(
  mapStateToProps,
  { setVisible }
)(App);
