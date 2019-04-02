import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';
import sanitize from 'sanitize-html';



class Message extends Component {

  createMarkup(html) {
    let sanitizedHtml = sanitize(html);
    let markdown = require( "markdown" ).markdown;
    return {__html: markdown.toHTML(sanitizedHtml)};
  }
  render() {
    return (
      <div className="my-2">
        <Container fluid>
            <Row>
                <Col xs="2" md="1">
                    <img className="message-image rounded" src={this.props.messageObject.image} alt="A random avatar generated from adorable avatars." />
                </Col>
                <Col xs="10" md="11">
                    <div><b>@{this.props.messageObject.username}</b> {moment(this.props.messageObject.timestamp).fromNow()}</div>
                    <div dangerouslySetInnerHTML={this.createMarkup(this.props.messageObject.message)}></div>
                </Col>
            </Row>
        </Container>
        <hr className="message-dividers" />
      </div>
    );
  }
}

export default Message;
