import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor(){
    super();

    // Define the initial state:
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }; //this.state

    this.bitrateClick = this.bitrateClick.bind(this)
    this.resolutionClick = this.resolutionClick.bind(this)
  }

  bitrateClick() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    });
  }

  resolutionClick() {
    console.log("sup son!!!")
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.video, {
          resolution: '720p'
        })
      })
    });
  }

  render() {
    return(
      <div>
        <div>Bitrate: {this.state.settings.bitrate}</div>
        <button className='bitrate' onClick={this.bitrateClick}>Bitrate</button>
        <div>Resolution: {this.state.settings.video.resolution}</div>
        <button className='resolution' onClick={this.resolutionClick}>Resolution</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
