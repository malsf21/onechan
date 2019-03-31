import React, { Component } from 'react';
import { Card, CardImg, CardBody,
  CardTitle, Button } from 'reactstrap';

class UserInfo extends Component {
  render() {
    return (
      <div>
        <Card color="dark" inverse>
          <CardImg top className="img-responsive" src={this.props.image} alt="A random avatar generated from adorable avatars." />
          <CardBody>
            <CardTitle>you are <b>@{this.props.username}</b></CardTitle>
            <Button color="primary" outline onClick={this.props.generateNewUser}>become someone else</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default UserInfo;
