import React from 'react';
import {
  Label,
  Grid,
  Image
} from 'semantic-ui-react'

const HeaderPanel  = ({ user, setVisible }) => (
  <div className="navigation__panel">
    <Grid columns='equal' verticalAlign='middle'>
      <Grid.Column textAlign='right'>
        <Label as='a'>
          <Image avatar spaced='right' src={ user.photoURL} />
          {user.displayName}
        </Label>
      </Grid.Column>
    </Grid>
  </div>
);

export default HeaderPanel;
