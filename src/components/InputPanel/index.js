import React from 'react';
import { connect } from 'react-redux';
import {
  Segment
} from 'semantic-ui-react'

import DateController from './DateController';
import Element from './Element';
import DATA_SET from '../../data/test';

const elements = [
  {
    type: 'weight',
    title: '体重',
    unit: 'kg'
  },
  {
    type: 'temperature',
    title: '体温',
    unit: '度'
  },
  {
    type: 'defecation',
    title: '排便',
    unit: ''
  }
];

class InputPanel extends React.Component {

  displayElements = elements => {

    const { currentDate } = this.props;
    const date = new Date(currentDate);
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    const key = Number(year + month + day);
    let data = DATA_SET.get(key);

    if (!data) {
      data = {
        weight: '',
        temperature: '',
        defecation: ''
      };
    }

    return (
      elements.length > 0 && elements.map((element, index) => (
        <Element
          key={index}
          type={element.type}
          title={element.title}
          unit={element.unit}
          value={data[element.type]}
        />
      ))
    )
  }

  render() {
    return(
      <div>
        <DateController />
        <Segment.Group>
          {this.displayElements(elements)}
        </Segment.Group>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  currentDate: state.date.currentDate,
});

export default connect(
  mapStateToProps,
)(InputPanel);
