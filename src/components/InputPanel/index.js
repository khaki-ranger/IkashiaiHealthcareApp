import React from 'react';
import { connect } from 'react-redux';
import {
  Segment
} from 'semantic-ui-react'

import DateController from './DateController';
import Element from './Element';
import Informations from './Informations';
import types from '../../config/types';

class InputPanel extends React.Component {

  displayElements = types => {
    const { currentDate, records, isLoading } = this.props;

    if (isLoading) return null;
    console.log('records.entries', records.entries);

    const date = new Date(currentDate);
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    const key = year + month + day;
    let data = records.get(key);

    if (!data) {
      data = {
        weight: '',
        temperature: '',
        defecation: ''
      };
    }

    return (
      types.length > 0 && types.map((element, index) => (
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
        <Informations />
        <Segment.Group>
          {this.displayElements(types)}
        </Segment.Group>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  currentDate: state.date.currentDate,
  records: state.record.records,
  isLoading: state.record.isLoading
});

export default connect(
  mapStateToProps,
)(InputPanel);
