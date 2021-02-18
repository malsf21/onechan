import React, { Component } from 'react';
import './App.css';

import firebase from './firebase.js';
import { Container, Row, Col } from 'reactstrap';
import RandomWord from 'random-words';
import constants from './constants.json';

import BottomInput from './components/BottomInput';
import MainNavbar from './components/MainNavbar';
import MessageList from './components/MessageList';
import UserInfo from './components/UserInfo';



class App extends Component {
  constructor(props){
    super(props);
    let newUsername = RandomWord() + RandomWord();
    let imgString = constants["adorable-avatars-url"] + constants["profile-avatar-size"] + "/" + newUsername + ".png";
    this.state = {
      userImage: imgString,
      username: newUsername,
      messageList: []
    };
  }
  componentDidMount() {
    let messagesRef = firebase.database().ref('messages');
    messagesRef.on('value', (snapshot) => {
      let messages = snapshot.val();
      let newMessagesList = [];
      for (let message in messages) {
        let newMessage = {
          message: messages[message].message,
          image: messages[message].image.replace("https://api.adorable.io/avatars/", constants["adorable-avatars-url"]),
          username: messages[message].username,
          timestamp: messages[message].timestamp
        }
        newMessagesList.push(newMessage);
      }
      this.setState({
        messageList: newMessagesList
      });
    });
  }
  createMessage(text){
    let newMessage = {
      image: this.state.userImage,
      message: text,
      username: this.state.username,
      timestamp: Date.now()
    }
    let messagesRef = firebase.database().ref('messages');
    messagesRef.push(newMessage);
  }
  generateNewUser(){
    let newUsername = RandomWord() + RandomWord();
    let imgString = constants["adorable-avatars-url"] + constants["profile-avatar-size"] + "/" + newUsername + ".png";
    this.setState({
      userImage: imgString,
      username: newUsername
    });
  }
  render() {
    return (
      <div className="App">
        <MainNavbar></MainNavbar>
        <Container fluid>
          <Row>
            <Col xs="3">
              <UserInfo
                username={this.state.username}
                image={this.state.userImage}
                generateNewUser = {() => {this.generateNewUser()}}
              ></UserInfo>
              <div className="text-white text-center">
                <small>made by <a href="https://matthewwang.me">matt</a> on <a href="https://github.com/mattxwang/onechan">GitHub</a> with react, firebase, and <a href="https://github.com/mattxwang/onechan">many other node libraries</a> |  avatars from <a href="http://avatars.adorable.io/">adorable avatars</a></small>
              </div>
            </Col>
            <Col xs="9">
              <MessageList messageList={this.state.messageList}></MessageList>
            </Col>
          </Row>
        </Container>
        <Container className="fixed-bottom mb-1" fluid>
        <Row>
          <Col xs="3">
          </Col>
          <Col xs="9">
            <BottomInput createMessage={(text)=>{this.createMessage(text)}}></BottomInput>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;
