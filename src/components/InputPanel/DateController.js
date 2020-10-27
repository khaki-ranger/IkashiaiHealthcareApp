import React from 'react';
import { connect } from 'react-redux';
import { setCurrentDate } from '../../actions';
import Moment from 'react-moment';
import 'moment/locale/ja';
import moment from 'moment';
import { Grid, Header, Button } from 'semantic-ui-react'

class DateController  extends React.Component {
  state = { isSameDay: true };

  changeDate = (direction) => {
    const { currentDate } = this.props;
    let newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + direction);
    this.setState({
      isSameDay: moment(newDate).isSame(moment(), 'day')
    });
    this.props.setCurrentDate(newDate);
  }

  render() {
    const { isSameDay } = this.state;
    const { currentDate } = this.props;

    return (
      <Grid columns='equal' verticalAlign='middle'>
        <Grid.Column>
          <Button icon='angle left' onClick={() => this.changeDate(-1)} />
        </Grid.Column>
        <Grid.Column width={8} textAlign='center'>
          <Header>
            <Moment locale='ja' format='YYYY.MM.DD (ddd)'>
              {currentDate}
            </Moment>
          </Header>
        </Grid.Column>
        <Grid.Column textAlign='right'>
          <Button
            disabled={isSameDay}
            icon='angle right'
            onClick={() => this.changeDate(1)}
          />
        </Grid.Column>
      </Grid>
    )
  }
};

const mapStateToProps = state => ({
  todaysDate: state.date.todaysDate,
  currentDate: state.date.currentDate
});

export default connect(
  mapStateToProps,
  { setCurrentDate }
)(DateController);
