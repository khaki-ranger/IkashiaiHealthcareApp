import React from 'react';
import Moment from 'react-moment';
import 'moment/locale/ja';
import { connect } from 'react-redux';
import {
  Header,
  Segment
} from 'semantic-ui-react'

import Element from './Element';

const elements = [
  {
    isDone: true,
    type: 'weight',
    title: '体重',
    value: '64.8',
    unit: 'kg'
  },
  {
    isDone: false,
    type: 'temperature',
    title: '体温',
    value: '',
    unit: '度'
  },
  {
    isDone: false,
    type: 'defecation',
    title: '排便',
    value: '',
    unit: ''
  }
];

class InputPanel  extends React.Component {

  displayElements = elements => (
    elements.length > 0 && elements.map((element, index) => (
      <Element
        key={index}
        type={element.type}
        isDone={element.isDone}
        title={element.title}
        value={element.value}
        unit={element.unit}
      />
    ))
  )

  render() {
    const { currentDate } = this.props;

    return(
      <Segment.Group>
        <Segment inverted color='red' size='large' textAlign='center'>
          <Header>
            <Moment locale='ja' format='YYYY.MM.DD (ddd)'>
              {currentDate}
            </Moment>
          </Header>
        </Segment>
        {this.displayElements(elements)}
      </Segment.Group>
    )
  }
};

const mapStateToProps = state => ({
  currentDate: state.date.currentDate,
});

export default connect(
  mapStateToProps
)(InputPanel );
