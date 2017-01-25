import React from "react";
import {Well, Button, Row, Col, FormGroup, FormControl, ControlLabel, Thumbnail, Form} from 'react-bootstrap';
import BookingRequest from '../component/BookingRequest.jsx';
import moment from 'moment';
import uniqueid from 'uniqueid';
import TimePicker from 'react-bootstrap-time-picker';
import timeFormat from 'time-format-utils';
import lodash from 'lodash';
class Statement extends React.Component {

    state = {
        startWorkTime: 32400,
        finishWorkTime: 64800
    }

    constructor(props) {
        super(props);
        this.generatorId = uniqueid();
    }

    onAddClick = () => {
        var id = this.generatorId();
        var newBookingRequest = {
            id: id,
            userId: "User",
            submissionData: moment().startOf('day').toISOString(),
            startTime: this.state.startWorkTime,
            finishTime: this.state.startWorkTime + 3600,
        };
        this.props.onAdd(newBookingRequest);

    }

    onPostClick = () => {
        var newBookingRequests =  _.map(this.props.bookingRequests, (bookingRequest) => {
            var duration = bookingRequest.finishTime - bookingRequest.startTime;
            var submissionTime = moment(bookingRequest.submissionData).valueOf()+bookingRequest.startTime;
            var submissionTime = moment(bookingRequest.submissionData).startOf('day').unix() + submissionTime
            var newBookingRequest = {
                bookingDateTime: moment.now(),
                userId: bookingRequest.userId,
                submissionTime: submissionTime,
                duration: duration
            };
            console.log(newBookingRequest)
            return newBookingRequest;
        })
        console.log(newBookingRequests)
        this.props.onPost(this.state.startWorkTime, this.state.finishWorkTime)
    }

    render() {
        return (
            <div>
                <Row>
                    <Col lg={6} md={6} sm={12}>
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
                                                        onBlur={(value) => {
                                                            this.props.onUpdate(value);
                                                        }}
                                        />
                                    )
                                }, this)
                            }
                            <Button bsStyle="warning" bsSize="large" block onClick={this.onAddClick}>Add</Button>
                            <Button bsStyle="success" bsSize="large" block onClick={this.onPostClick}>Send</Button>
                            <Button bsStyle="danger" bsSize="large" block>Delete</Button>
                        </Well>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Sсhedule</ControlLabel>
                            <FormControl componentClass="textarea"/>
                        </FormGroup>
                        <Button bsStyle="info" bsSize="large" block>Get</Button>
                        <Button bsStyle="danger" bsSize="large" block>Clear</Button>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default Statement;
