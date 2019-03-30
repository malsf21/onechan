import React, { Component } from 'react';
import { Input } from 'reactstrap';

class BottomInput extends Component {
  render() {
    return (
      <div>
        <Input type="text" name="text" placeholder="Why not say something?" id="input-box" />
      </div>
    );
  }
}

export default BottomInput;
