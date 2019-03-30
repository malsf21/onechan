import React, { Component } from 'react';
import Message from './Message';


class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: this.props.messageList
    }
  }
  render() {
    return (
      <div className="message-list">
          {
              this.props.messageList.map((object, i) => {
                return (
                    <Message messageObject={object} key={i}></Message>
                )
            })
          }
      </div>
    );
  }
}

export default MessageList;
