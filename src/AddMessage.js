import React from "react";

class AddMessage extends React.Component {
  state = {
  	message: '',
  }
  
  handleInputChange = (e) => {
    const { value } = e.target
  	e.preventDefault();
	this.setState(() => ({
    	message: value,
    }));
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
  	this.props.onMessage(this.state.message);
    this.setState(() => ({
    	message: '',
    }));
  };
  
  isDisabled = () => {
    const { message } = this.state;
  	return message === '';
  }
 
	render() {
      const { message } = this.state;
    	return(
          <div>
          	<form className="input-group" onSubmit={this.handleSubmit}>
          		<input 
          		placeholder="Enter your message"
          		value={message}
  				type="text"
				className="form-control"
  				onChange={this.handleInputChange}
          	/>
  			<div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()} onClick={this.handleClick}>
              SEND
            </button>
          </div>
          	</form>
          </div>
        )
    }
}
export default AddMessage;