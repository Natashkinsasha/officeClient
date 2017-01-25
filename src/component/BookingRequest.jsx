import React from "react";
import {Well, Button, Row, Col, FormGroup, FormControl, ControlLabel, Thumbnail, Form} from 'react-bootstrap';
import TimePicker from 'react-bootstrap-time-picker';
import DatePicker from 'react-bootstrap-date-picker';
import moment from 'moment'
import timeFormat from 'time-format-utils';

class BookingRequest extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillReceiveProps(nextProps) {
        this.updateState(nextProps);
    }

    componentWillMount() {
        this.updateState(this.props);
    }

    updateState = (props) => {
        this.setState({
            startWorkTime: props.startWorkTime,
            finishWorkTime: props.finishWorkTime,
            id: props.id,
            userId: props.userId,
            submissionData: props.submissionData,
            startTime: props.startTime,
            finishTime: props.finishTime,
        });
    }


    onAddClick = () => {
        this.props.onAddClick();
    }

    onRemoveClick = () => {
        this.props.onRemoveClick();
    }

    onPostClick = () => {
        this.props.onPostClick();
    }

    onChange = (value) => {
        if (this.props.onChange != undefined) {
            this.props.onChange(value);
        }
    }

    onBlur = (value) => {

        this.props.onBlur(value);
    }

    render() {
        return (
            <div>
                <Thumbnail>
                    <Form horizontal>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={3}>
                                Name
                            </Col>
                            <Col sm={9}>
                                <FormControl value={this.state.userId} onChange={(e) => {
                                    this.setState({userId: e.target.value});
                                    this.onChange();
                                }} onBlur={(e) => {
                                    var bookingRequest = {
                                        id: this.state.id,
                                        userId: e.target.value,
                                        submissionData: this.state.submissionData,
                                        startTime: this.state.startTime,
                                        finishTime: this.state.finishTime,
                                    }
                                    this.onBlur(bookingRequest);
                                }}/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={3}>
                                <ControlLabel>Date</ControlLabel>
                            </Col>
                            <Col sm={9}>
                                <DatePicker value={this.state.submissionData}
                                            onChange={(value) => {
                                                this.setState({submissionData: value});
                                                var bookingRequest = {
                                                    id: this.state.id,
                                                    userId: this.state.userId,
                                                    submissionData: value,
                                                    startTime: this.state.startTime,
                                                    finishTime: this.state.finishTime,
                                                }
                                                this.onBlur(bookingRequest);
                                                this.onChange(bookingRequest);
                                            }}/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={3}>
                                <ControlLabel>Start time</ControlLabel>
                            </Col>
                            <Col sm={9}>
                                <TimePicker start={timeFormat.secondsToSmallHhmm(this.state.startWorkTime)}
                                            end={timeFormat.secondsToSmallHhmm(this.state.finishWorkTime)} step={30}
                                            value={this.state.startTime}
                                            onChange={(value) => {
                                                this.setState({startTime: value});
                                                var bookingRequest = {
                                                    id: this.state.id,
                                                    userId: this.state.userId,
                                                    submissionData: this.state.submissionData,
                                                    startTime: value,
                                                    finishTime: this.state.finishTime,
                                                }
                                                this.onChange(bookingRequest)
                                                this.onBlur(bookingRequest);
                                            }}/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={3}>
                                <ControlLabel>End time</ControlLabel>
                            </Col>
                            <Col sm={9}>
                                <TimePicker start={timeFormat.secondsToSmallHhmm(this.state.startWorkTime)}
                                            end={timeFormat.secondsToSmallHhmm(this.state.finishWorkTime)} step={30}
                                            value={this.state.finishTime}
                                            onChange={(value) => {
                                                this.setState({finishTime: value});
                                                var bookingRequest = {
                                                    id: this.state.id,
                                                    userId: this.state.userId,
                                                    submissionData: this.state.submissionData,
                                                    startTime: this.state.startTime,
                                                    finishTime: value,
                                                }
                                                this.onChange(bookingRequest)
                                                this.onBlur(bookingRequest);
                                            }}/>
                            </Col>
                        </FormGroup>
                    </Form>
                </Thumbnail>
            </div>

        )
    }
}

export default BookingRequest;


