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
    const { currentDate, todaysDate } = this.props;
    let newDate = direction !== 0 ? new Date(currentDate) : new Date(todaysDate);
    newDate.setDate(newDate.getDate() + direction);
    this.setState({
      isSameDay: moment(newDate).isSame(moment(), 'day')
    });
    this.props.setCurrentDate(newDate);
  }

  render() {
    const { isSameDay } = this.state;
    const { currentDate } = this.props;

    return (
      <React.Fragment>
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
        <Button.Group widths='2' style={{ marginTop: '1rem' }}>
          <Button>日付指定</Button>
          <Button.Or />
          <Button onClick={() => this.changeDate(0)}>本日</Button>
        </Button.Group>
      </React.Fragment>
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
