import React from 'react';
import { connect } from 'react-redux';
import {
  Segment,
  Placeholder
} from 'semantic-ui-react'

import DateController from './DateController';
import Element from './Element';
import Informations from './Informations';
import types from '../../config/types';

const IsLoadingSegment = () => (
  <React.Fragment>
    { types.map((element, index) => (
        <Segment key={index}>
          <Placeholder>
            <Placeholder.Line />
          </Placeholder>
        </Segment>
      ))
    }
  </React.Fragment>
)

class InputPanel extends React.Component {

  getDateKey = () => {
    const date = new Date(this.props.currentDate);
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    const key = year + month + day;

    return key;
  }

  displayElements = types => {
    const { records } = this.props;

    let data = records.get(this.getDateKey());

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
    const { isLoading } = this.props;

    return(
      <div>
        <DateController />
        <Informations />
        <Segment.Group>
          {
            isLoading ? 
              <IsLoadingSegment /> : 
              this.displayElements(types)
          }
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
