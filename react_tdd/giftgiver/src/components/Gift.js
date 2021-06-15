import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button
} from 'react-bootstrap';

class Gift extends Component {
  constructor() {
    super();

    this.state = {
      person: '',
      present: ''
    };
  }

  componentDidMount() {
    this.setState({ person: this.props.person, present: this.props.present });
  }

  render() {
    return (
      <div className="gift">
        <Form>
          <FormGroup>
            <FormLabel>Person</FormLabel>
            <FormControl
              className="input-person"
              value={this.state.person}
              onChange={async (event) => {
                await this.setState({ person: event.target.value });
                this.props.modifyGift(this.props.gift.id, this.state);
              }}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Present</FormLabel>
            <FormControl
              className="input-present"
              value={this.state.present}
              onChange={async (event) => {
                await this.setState({ present: event.target.value });
                this.props.modifyGift(this.props.gift.id, this.state);
              }}
            />
          </FormGroup>
        </Form>
        <Button
          className="btn-remove"
          onClick={() => this.props.removeGift(this.props.gift.id)}
        >
          Remove Gift
        </Button>
      </div>
    );
  }
}

export default Gift;
