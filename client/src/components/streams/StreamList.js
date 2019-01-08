import './StreamList.css';
import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchGames } from '../../actions';


class StreamList extends React.Component {

    componentDidMount = async () => {
        this.props.fetchGames();
    }

    renderList() {
        // console.log("streamList", this.props.streams)
        return this.props.games.map((item) => {
            // console.log('StreamList ', item)
            return (
                <div key={item._id} className="ui centered card">
                    <Link to={`/streams/game/${item._id}`} className="image">
                        <img src={item.preview.medium} width="170" alt={item.game} />
                    </Link>
                    <div className="content">
                    <Link to={`/streams/game/${item._id}`}>
                        <div className="header">{item.game}</div>
                    </Link>
                        <div className="meta">
                            <span className="small">{item.viewers} viewers</span>
                        </div>
                    </div>
                </div>
            );
        }) 
    }

    render() {
        if (!this.props.games) {
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
        return ( 
            <div>
                <h5>Top Games</h5>
                <div className="image-list">
                    {this.renderList()}
                </div>
            </div>
         );
    }
    
}

const mapStateToProps = (state) => {
    return { 
        games: Object.values(state.games)
    }
}
 
export default connect(mapStateToProps, { fetchGames })(StreamList);