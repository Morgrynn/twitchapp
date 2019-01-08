import React from 'react'
import { connect } from "react-redux";
import { fetchStream } from "../../actions";


class StreamShow extends React.Component {

    componentDidMount() {
        // console.log("this comp", this.props)
        this.props.fetchStream(this.props.match.params.id)
    }
    
    render() {
        // if (!this.props.stream) {
        //     return <div>Loading...</div>
        // }
        console.log("this", this.props)
        return (
            <div>
                <h5>StreamShow</h5>
                <p>{this.props.stream}</p>
                
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id],
        games: Object.values(state.games)
    }
}
 

export default connect(mapStateToProps, { fetchStream })(StreamShow);