import React from 'react';
import { connect } from 'react-redux';
import { setVisible } from '../../actions';
import {
  Label,
  Grid,
  Icon,
  Image
} from 'semantic-ui-react'

const HeaderPanel  = ({ user, setVisible }) => (
  <div className="navigation__panel">
    <Grid columns='equal' verticalAlign='middle'>
      <Grid.Column
        textAlign='left'
        onClick={() => setVisible(true)}
      >
        <Icon name='list' size='large' />
      </Grid.Column>
      <Grid.Column textAlign='right'>
        <Label as='a'>
          <Image avatar spaced='right' src={ user.photoURL} />
          {user.displayName}
        </Label>
      </Grid.Column>
    </Grid>
  </div>
);

export default connect(
  null,
  { setVisible }
)(HeaderPanel);
