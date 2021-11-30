import React from "react";
import MessageHistory from "./MessageHistory";
import AddMessage from "./AddMessage";
import PropTypes from "prop-types";

class ChatWindow extends React.Component {
  
  onMessage = (message) => {
  	this.props.onMessage(this.props.user.username, message);
  };
  
  
	render() {
      console.log(this.props);
      const { user, messages } = this.props;
      console.log(this.props);
    	return(
        	<div className="chat-window">
          		<h2>Super Awesome Chat</h2>
          		<div className="name sender">{user.username}</div>
				<MessageHistory messages={messages} user={user} />
				<AddMessage onMessage={this.onMessage} />
          	</div>
        );
    }
}

ChatWindow.proptypes = {
	user: PropTypes.object.isRequired,
  	messages: PropTypes.array.isRequired,
  	onMessage: PropTypes.func.isRequired,
};
export default ChatWindow;