import React from 'react';
import {
  Segment
} from 'semantic-ui-react'

import DateController from './DateController';
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

export default InputPanel;
