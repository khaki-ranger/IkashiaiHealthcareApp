import React from 'react';
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

class Element  extends React.Component {
  state = {
    modal: false,
    weight: '',
    temperature: '',
    defecation: false
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('this.state', this.state);
    this.closeModal();
  }

  handleChange = event => {
    const { name } = event.target;
    let value = event.target.value;
    if (name === 'defecation') {
      value = (event.target.value === 'true');
    }
    this.setState({ [name]: value });
  };

  openModal = () => this.setState({ modal: true });

  closeModal = () => this.setState({ modal: false });

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
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
      )
    }
  };

  render() {
    const { modal } = this.state;
    const { isDone, type, title, value, unit } = this.props;
    
    return(
      <Segment style={{ backgroundColor: isDone ? '#eee' : '#fff' }}>
        <Grid
          columns='equal'
          verticalAlign='middle'
          onClick={this.openModal}
        >
          <Grid.Column width={1}>
            <Icon name={ isDone ? 'check' : 'square outline' } />
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
              <Icon name="checkmark" /> Add
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

export default Element
