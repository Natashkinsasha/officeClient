import React from "react";
import {Well, Button} from 'react-bootstrap';
import BookingRequest from '../component/BookingRequest.jsx';
import moment from 'moment';
import uniqueid from 'uniqueid';


class Statement extends React.Component {


    constructor(props) {
        super(props);
        this.generatorId = uniqueid();
    }

    onAddClick = () => {
        this.props.onAdd({
            id: this.generatorId(),
            userId: "User",
            submissionData: moment().toISOString(),
            bookingDateTime: moment().format('X'),
            startTime: 0,
            finishTime: 3600,
        });
    }

    onPostClick = () => {
        this.props.onPost()
    }

    render() {
        return (
            <div>
                <Well>
                    {
                        this.props.bookingRequests.map(function (bookingRequest) {
                            return (
                                <BookingRequest key={bookingRequest.id}
                                                id={bookingRequest.id}
                                                userId={bookingRequest.userId}
                                                submissionData={bookingRequest.submissionData}
                                                startTime={bookingRequest.startTime}
                                                finishTime={bookingRequest.finishTime}
                                                bookingDateTime={bookingRequest.bookingDateTime}
                                                onChange={(value) => {
                                                    this.props.onUpdate(value);
                                                }}
                                                onRemove={this.props.onRemove}
                                />
                            )
                        }, this)
                    }
                    <Button bsStyle="primary" bsSize="large" block onClick={this.onAddClick}>Add</Button>
                    <Button bsStyle="success" bsSize="large" block onClick={this.onPostClick}>Send</Button>
                </Well>
            </div>

        )
    }
}

export default Statement;
