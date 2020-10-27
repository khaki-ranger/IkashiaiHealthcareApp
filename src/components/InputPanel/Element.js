import React from 'react';
import firebase from '../../firebase';
import { connect } from 'react-redux';
import {
  Header,
  Segment,
  Icon,
  Grid,
  Modal,
  Form,
  Input,
  Button
} from 'semantic-ui-react'

class Element extends React.Component {
  state = {
    user: this.props.currentUser,
    value: '',
    modal: false,
    weight: '',
    temperature: '',
    defecation: false,
    loading: false
  };

  getDateKey = () => {
    const date = new Date(this.props.currentDate);
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    const key = year + month + day;

    return key;
  }

  updateRecord = ({ type, value }) => {
    const { currentUser } = this.props;
    const updates = {
      [type]: value
    };

    if (updates) {
      this.setState({ loading: true });
      
      firebase.database().ref('records')
        .child(currentUser.uid)
        .child(this.getDateKey())
        .update(updates)
        .then(() => {
          console.log('updated');
          this.setState({ loading: false, value: '' });
          this.closeModal();
        })
        .catch(err => {
          console.error(err);
          this.setState({ loading: false });
          this.closeModal();
        });
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    const type = this.props.type;
    const value = this.state[type];

    if (value !== '') {
      this.updateRecord({ type, value });
    }
  };

  handleChange = event => {
    const { name } = event.target;
    let value = event.target.value;
    if (name === 'defecation') {
      if (event.target.value !== '' || event.target.value !== undefined) {
        value = event.target.value;
      }
    }
    this.setState({ [name]: value, value: value });
  };

  openModal = () => this.setState({ modal: true, value: this.props.value });

  closeModal = () => this.setState({ modal: false, value: '' });

  displayForm = ({ type, value, unit }) => {
    if (type === 'defecation') {
      return (
        <Form inverted>
          <Form.Field
            control='select'
            name={type}
            onChange={this.handleChange}
          >
            <option value={false}>なし</option>
            <option value={true}>あり</option>
          </Form.Field>
        </Form>
      )
    } else {
      return (
        <Form inverted>
          <Form.Field>
            <Input
              fluid
              label={unit}
              labelPosition='right'
              name={type}
              value={this.state.value}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
      )
    }
  };

  render() {
    const { modal } = this.state;
    const { type, title, unit } = this.props;
    let { value } = this.props;

    if (type === 'defecation') {
      if (value !== '') {
        value = value ? 'あり' : 'なし';
      }
    }

    return(
      <Segment style={{ backgroundColor: value === '' || value === undefined ? '#fff' : '#eee' }}>
        <Grid
          columns='equal'
          verticalAlign='middle'
          onClick={this.openModal}
        >
          <Grid.Column width={1}>
            <Icon name={ value === '' || value === undefined ? 'square outline' : 'check' } />
          </Grid.Column>
          <Grid.Column>
            <Header>{title}</Header>
          </Grid.Column>
          <Grid.Column textAlign='right'>
            {
              value ? <Header>{value} {unit}</Header> : ''
            }
          </Grid.Column>
        </Grid>

        {/* Input Modal */}
        <Modal basic open={modal} onClose={this.closeModal}>
          <Modal.Header>{title}</Modal.Header>
          <Modal.Content>
            {this.displayForm({ type, value, unit })}
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" inverted onClick={this.handleSubmit}>
              <Icon name="checkmark" /> Update
            </Button>
            <Button color="red" inverted onClick={this.closeModal}>
              <Icon name="remove" /> Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </Segment>
    )
  }
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  currentDate: state.date.currentDate
});

export default connect(
  mapStateToProps
)(Element);
