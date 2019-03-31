import React, { Component } from 'react';
import Message from './Message';


class MessageList extends Component {
    messagesEnd = React.createRef()

    componentDidMount () {
        this.scrollToBottom()
    }
    componentDidUpdate () {
        this.scrollToBottom()
    }
    scrollToBottom = () => {
        this.messagesEnd.current.scrollIntoView({ behavior: 'smooth' })
    }
    render() {
        if (this.props.messageList.length === 0){
            return (
                <div className="text-white">
                    It's empty. Why not say something?
                    <div ref={this.messagesEnd} />
                </div>
            )
        }
        return (
            <div className="message-list">
                {
                    this.props.messageList.map((object, i) => {
                        return (
                            <Message messageObject={object} key={i}></Message>
                        )
                    })
                }
                <div ref={this.messagesEnd} />
            </div>
        );
    }
}

export default MessageList;
