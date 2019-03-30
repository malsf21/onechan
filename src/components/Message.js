import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';


class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.messageObject.image,
      message: this.props.messageObject.message,
      username: this.props.messageObject.username
    }
  }
  render() {
    return (
      <div className="my-2">
        <Container fluid>
            <Row>
                <Col xs="2" md="1">
                    <img className="message-image" src={this.state.image} alt="A random avatar generated from adorable avatars." />
                </Col>
                <Col xs="10" md="11">
                <CardText>
                    <b>@{this.state.username}</b>
                    <br />
                    {this.state.message}
                </CardText>
                </Col>
            </Row>
        </Container>
        <hr className="message-dividers" />
      </div>
    );
  }
}

export default Message;
