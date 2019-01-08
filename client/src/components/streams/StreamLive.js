import React from 'react';
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchLiveStreams } from "../../actions";

class StreamLive extends React.Component {

    componentDidMount() {
        this.props.fetchLiveStreams();
    }

    renderLiveStream() {
        return this.props.lives.map((stream) => {
            // console.log("streamlive", stream)
            return (
                <div key={stream._id} className="column">
                    <div className="ui card">             
                        <div className="ui segment">
                            <img className="ui centered medium image" src={stream.preview.large} alt="video"/>
                        </div>
                        <div className="content">
                            <p className="header">{stream.channel.game}</p>
                            <div className="meta">                           
                            <span className="date">{stream.stream_type}</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
    }

    render() {
        // console.log("streamLive", this.props.streams)
        return ( 
            <div>
                <h3>Live Streams</h3>
                <div className="ui grid">   
                    <div className="four column row">
                        {this.renderLiveStream()}
                    </div>
                </div>
            </div>
         );
    }
    
}

const mapStateToProps = (state) => {
    return {
        lives: Object.values(state.live)
    }
}
 
export default connect(mapStateToProps, { fetchLiveStreams })(StreamLive);