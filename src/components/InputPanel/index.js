import React from 'react';
import {
  Header,
  Segment,
  Icon,
  Grid
} from 'semantic-ui-react'

const InputPanel = () => (
  <Segment.Group>
    <Segment inverted color='red' size='large' textAlign='center'>
      <Header>2020.10.18 (日)</Header>
    </Segment>
    <Segment secondary>
      <Grid  columns='equal' verticalAlign='middle'>
        <Grid.Column width={1}>
          <Icon name='check' />
        </Grid.Column>
        <Grid.Column>
          <Header>体重</Header>
        </Grid.Column>
        <Grid.Column textAlign='right'>
          <Header>64.8kg</Header>
        </Grid.Column>
      </Grid>
    </Segment>
    <Segment>
      <Grid  columns='equal' verticalAlign='middle'>
        <Grid.Column width={1}>
          <Icon name='square outline' />
        </Grid.Column>
        <Grid.Column>
          <Header>体温</Header>
        </Grid.Column>
        <Grid.Column textAlign='right'>
          <Header></Header>
        </Grid.Column>
      </Grid>
    </Segment>
    <Segment>
      <Grid  columns='equal' verticalAlign='middle'>
        <Grid.Column width={1}>
          <Icon name='square outline' />
        </Grid.Column>
        <Grid.Column>
          <Header>排便</Header>
        </Grid.Column>
        <Grid.Column textAlign='right'>
          <Header></Header>
        </Grid.Column>
      </Grid>
    </Segment>
  </Segment.Group>
)

export default InputPanel;
