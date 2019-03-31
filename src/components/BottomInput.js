import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';

class BottomInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: ""
    }
  }
  handleChange(e) {
    this.setState({ message: e.target.value });
  }
  handleSubmit(e){
    let messageString = this.state.message;
    this.props.createMessage(messageString);
    this.state.message = "";
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Input type="text" placeholder="Why not say something?" value={this.state.message} onChange={this.handleChange.bind(this)} />
        </Form>
      </div>
    );
  }
}

export default BottomInput;
