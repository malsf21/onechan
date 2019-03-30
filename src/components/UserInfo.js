import React, { Component } from 'react';
import { Card, CardImg, CardBody,
  CardTitle, Button } from 'reactstrap';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.image,
      username: this.props.username
    }
  }
  render() {
    return (
      <div>
        <Card color="dark" inverse>
          <CardImg top className="img-responsive" src={this.state.image} alt="A random avatar generated from adorable avatars." />
          <CardBody>
            <CardTitle>you are <b>@{this.state.username}</b></CardTitle>
            <Button color="primary">become someone else</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default UserInfo;
