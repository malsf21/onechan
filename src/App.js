import React, { Component } from 'react';
import './App.css';

import { Container, Row, Col } from 'reactstrap';

import BottomInput from './components/BottomInput';
import MainNavbar from './components/MainNavbar';
import MessageList from './components/MessageList';
import UserInfo from './components/UserInfo';

class App extends Component {
  render() {
    let tempMsgList = [
      {
        "message": "Hello, anybody there?",
        "image": "https://api.adorable.io/avatars/256/solongandthanksforallthefish.png",
        "username": "agnes"
      },
      {
        "message": "LOL, nobody's here, this site sucks.",
        "image": "https://api.adorable.io/avatars/256/solongandthanksforallthefish.png",
        "username": "agnes"
      },
      {
        "message": "Hey, don't be so mean :'(",
        "image": "https://api.adorable.io/avatars/256/feelingsarefatal.png",
        "username": "pristine"
      },
      {
        "message": "Yeah, I'm sure matt put a non-trivial amount of time into this!",
        "image": "https://api.adorable.io/avatars/256/fouroutoffive.png",
        "username": "arctic"
      },
      {
        "message": "I mean yeah, but it's still not that good.",
        "image": "https://api.adorable.io/avatars/256/matt.png",
        "username": "matt"
      },
      {
        "message": "Yeah, tbh it really isn't amazing.",
        "image": "https://api.adorable.io/avatars/256/feelingsarefatal.png",
        "username": "pristine"
      },
      {
        "message": "Doesn't this idea already exist too?",
        "image": "https://api.adorable.io/avatars/256/supermarketsucked.png",
        "username": "bicoastal"
      }
      
    ]
    return (
      <div className="App">
        <MainNavbar></MainNavbar>
        <Container fluid>
          <Row>
            <Col xs="3">
              <UserInfo
                username="agnes"
                image="https://api.adorable.io/avatars/256/solongandthanksforallthefish.png"
              ></UserInfo>
              <div className="text-white text-center">
                <small>made by <a href="https://matthewwang.me">matt</a> on <a href="https://github.com/malsf21/onechan">GitHub</a> |  avatars from <a href="http://avatars.adorable.io/">adorable avatars</a></small>
              </div>
            </Col>
            <Col xs="9">
              <MessageList messageList={tempMsgList}></MessageList>
            </Col>
          </Row>
        </Container>
        <Container className="fixed-bottom mb-1" fluid>
        <Row>
          <Col xs="3">
          </Col>
          <Col xs="9">
            <BottomInput></BottomInput>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;
