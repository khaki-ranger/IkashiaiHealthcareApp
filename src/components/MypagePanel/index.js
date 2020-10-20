import React from 'react';
import { connect } from 'react-redux';
import { Header, Image } from 'semantic-ui-react'

const Mypage = ({ currentUser }) => (
  <Header as='h2' textAlign='center'>
    <Image circular src={currentUser.photoURL} />
    {currentUser.displayName}
  </Header>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(
  mapStateToProps
)(Mypage);
