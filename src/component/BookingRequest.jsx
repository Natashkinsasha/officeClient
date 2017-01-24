import React from "react";
import {Button, Well} from 'react-bootstrap';


class BookingRequest extends React.Component {
    constructor(props) {
        super(props);
    }


    onAddClick = () => {
        this.props.onAddClick();
    }

    onRemoveClick = () => {
        this.props.onRemoveClick();
    }

    onPostClick = () =>{
        this.props.onPostClick();
    }

    render() {
        return (
            <div>

            </div>

        )
    }
}

export default BookingRequest;


