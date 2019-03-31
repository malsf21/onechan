import React, { Component } from 'react';
import './App.css';

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
      messageList: [
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
    };
  }
  createMessage(text){
    console.log(text);
    let newMessage = {
      image: this.state.userImage,
      message: text,
      username: this.state.username
    }
    let newMessageList = this.state.messageList;
    newMessageList.push(newMessage);
    this.setState({
      messageList: newMessageList
    });
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
                <small>made by <a href="https://matthewwang.me">matt</a> on <a href="https://github.com/malsf21/onechan">GitHub</a> with React |  avatars from <a href="http://avatars.adorable.io/">adorable avatars</a></small>
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
