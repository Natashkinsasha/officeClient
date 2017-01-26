import React from "react";
import {Well, Button, Row, Col, FormGroup, FormControl, ControlLabel, Thumbnail, Form} from 'react-bootstrap';
import BookingRequest from '../component/BookingRequest.jsx';
import moment from 'moment';
import uniqueid from 'uniqueid';
import TimePicker from 'react-bootstrap-time-picker';
import timeFormat from 'time-format-utils';
import lodash from 'lodash';
class Statement extends React.Component {


    constructor(props) {
        super(props);
        console.log(props)
        this.generatorId = uniqueid();
        this.state = {
            startWorkTime: 32400,
            finishWorkTime: 64800
        }
    }

    onAddClick = () => {
        this.props.onAdd({
            id: this.generatorId(),
            userId: "User",
            submissionData: moment().startOf('day').toISOString(),
            startTime: this.state.startWorkTime,
            bookingDateTime: moment().format('X'),
            finishTime: this.state.startWorkTime + 3600,

        });
    }

    onPostClick = () => {
        console.log(this.props.bookingRequests)
        var newBookingRequests = _.map(this.props.bookingRequests, (bookingRequest) => {
            var duration = bookingRequest.finishTime - bookingRequest.startTime;
            var submissionTime = Number(moment(bookingRequest.submissionData).startOf('day').format('X')) + bookingRequest.startTime;
            var newBookingRequest = {
                bookingDateTime: bookingRequest.bookingDateTime,
                userId: bookingRequest.userId,
                submissionTime: submissionTime,
                duration: duration
            };
            console.log(newBookingRequest)
            return newBookingRequest;
        })
        console.log(newBookingRequests)
        this.props.onPost(this.state.startWorkTime, this.state.finishWorkTime, newBookingRequests)
    }

    render() {
        return (
            <div>
                    <Well>
                        <Form horizontal>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={3}>
                                    <ControlLabel>Start work time</ControlLabel>
                                </Col>
                                <Col sm={9}>
                                    <TimePicker step={30} value={this.state.startWorkTime}
                                                onChange={(value) => {
                                                    this.setState({startWorkTime: value});
                                                }}/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={3}>
                                    <ControlLabel>End work time</ControlLabel>
                                </Col>
                                <Col sm={9}>
                                    <TimePicker step={30} value={this.state.finishWorkTime}
                                                onChange={(value) => {
                                                    this.setState({finishWorkTime: value});
                                                }}/>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Well>
                    <Well>
                        {
                            this.props.bookingRequests.map(function (bookingRequest) {
                                return (
                                    <BookingRequest key={bookingRequest.id}
                                                    id={bookingRequest.id}
                                                    startWorkTime={this.state.startWorkTime}
                                                    finishWorkTime={this.state.finishWorkTime}
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
                        <Button bsStyle="warning" bsSize="large" block onClick={this.onAddClick}>Add</Button>
                        <Button bsStyle="success" bsSize="large" block onClick={this.onPostClick}>Send</Button>
                    </Well>
            </div>

        )
    }
}

export default Statement;
