import React from 'react';

class DigitalClicker extends React.Component {
  constructor(){
    super();

    // Define the initial state:
    this.state = {
      timesClicked: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("WASSUP")
    // Update state here...
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  }

  render() {
    return(
      <div>
        <div>Times Clicked: {this.state.timesClicked}</div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

export default DigitalClicker;
