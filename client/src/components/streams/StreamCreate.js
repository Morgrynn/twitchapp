import React from 'react'
import { createStream } from "../../actions";
import { connect } from "react-redux";
import StreamForm from './StreamForm';


class StreamCreate extends React.Component {

    onSubmit = (formValues) => {
        // console.log(formValues);
        this.props.createStream(formValues);
    }

    render() {
        // console.log(this.props);
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
    
}

export default connect(null, { createStream })(StreamCreate);