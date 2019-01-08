import React from 'react';
import { connect } from "react-redux";
import { setSearchField } from "../actions";
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import GoogleAuth from './GoogleAuth';



class Header extends React.Component {



    render() {
        // Tried to use as search function in searchbar. Had something similar working in react only until i added redux.
        // const filteredItems = this.props.streams.map(image => image.game).filter(item => {
        //         return item.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        //     })
        return ( 
            <div className="ui secondary pointing menu">
                <Link to="/" className="item">
                    <i className="twitch icon" />
                </Link>
                <Link to="/streams/browse" className="item">
                    Browse
                </Link>
                <Link to="/streams/new" className="item">
                    Create
                </Link>
                <Link to="/streams/channel" className="item">
                    MyChannel
                </Link>
                <div className="right menu menu">
                    <SearchBar 
                        onSearchBarChange={this.props.onSearchBarChange}
                    />
                </div>
                
                <div className="right menu">
                    <Link to="/" className="item">
                    </Link>
                    {/* <GoogleAuth /> //Getting a TypeError */}
                    
                </div>
            </div>
         );
    }
    
}

const mapStateToProps = (state) => {
    return {
        searchField: state.searchField,
        streams: state.streams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchBarChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);