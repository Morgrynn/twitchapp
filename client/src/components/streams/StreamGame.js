import React from 'react'
import { connect } from "react-redux";
import { fetchGame } from "../../actions";


class StreamGame extends React.Component {

    componentDidMount() {
        // console.log(this.props.fetchGame(this.props.match.params.id));
        this.props.fetchGame(this.props.match.params.id);
    }

    render() { 
        if (!this.props.game) {
            return (
                <div className="ui raised very padded text container segment">
                    <div className="ui active dimmer">
                        <div className="ui huge text loader">Loading</div>
                    </div>
                    <p></p>
                    <p></p>
                </div>
            );
        }
        console.log("props", this.props.game);

        return ( 
            <div>
                StreamGame
                <div className="ui segment">
                    <div className="embed-responsive embed-responsive-16by9">
                       <iframe 
                            title="twitch-stream"
                            className="embed-responsive-item" 
                            src={this.props.game.channel.url}
                            height="720"
                            width="1280"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen="true"
                       />
                    </div>
                    <div className="ui section divider">
                        <p>{this.props.game.game}</p>
                    </div>
                </div>
            </div>
         );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        game: state.games[ownProps.match.params.id]
    }
}

 
export default connect(mapStateToProps, { fetchGame })(StreamGame);
