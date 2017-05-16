import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }


  handleBitrateClick(){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    })
  }

  handleResClick(){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.video, {
          resolution: '720p'
        })
      })
    })
  }


  render(){
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrateClick.bind(this)}>Bitrate to 12</button>
        <button className="resolution" onClick={this.handleResClick.bind(this)}>Res to 720</button>
      </div>
    )
  }


}


export default YouTubeDebugger
