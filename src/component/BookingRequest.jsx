import React from "react";
import {Well, Button, Row, Col, FormGroup, FormControl, ControlLabel, Thumbnail, Form} from 'react-bootstrap';
import TimePicker from 'react-bootstrap-time-picker';
import DatePicker from 'react-bootstrap-date-picker';
import moment from 'moment'
import timeFormat from 'time-format-utils';

class BookingRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startWorkTime: this.props.startWorkTime,
            finishWorkTime: this.props.finishWorkTime,
        }

    }

    componentWillReceiveProps(nextProps) {
        this.updateState(nextProps);
    }

    componentWillMount() {
        this.updateState(this.props);
    }

    updateState = (props) => {
        this.setState({
            id: props.id,
            userId: props.userId,
            submissionData: props.submissionData,
            startTime: props.startTime,
            finishTime: props.finishTime,
            bookingDateTime: props.bookingDateTime,
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
        this.props.onChange(value);
    }


    render() {
        return (
            <div>
                <Thumbnail>
                    <div className=" text-right">
                        <span className="glyphicon glyphicon-remove" onClick={()=>{
                            this.props.onRemove(this.state.id);
                        }}></span>
                    </div>
                    <Form horizontal>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={3}>
                                Name
                            </Col>
                            <Col sm={8}>
                                <FormControl value={this.state.userId} onChange={(e) => {
                                    this.setState({userId: e.target.value});
                                    this.onChange({
                                        id: this.state.id,
                                        userId: e.target.value,
                                        submissionData: this.state.submissionData,
                                        bookingDateTime: this.state.bookingDateTime,
                                        startTime: this.state.startTime,
                                        finishTime: this.state.finishTime,
                                    });
                                }}/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={3}>
                                <ControlLabel>Date</ControlLabel>
                            </Col>
                            <Col sm={8}>
                                <DatePicker value={this.state.submissionData}
                                            onChange={(value) => {
                                                this.setState({submissionData: value});
                                                this.onChange({
                                                    id: this.state.id,
                                                    userId: this.state.userId,
                                                    submissionData: value,
                                                    startTime: this.state.startTime,
                                                    bookingDateTime: this.state.bookingDateTime,
                                                    finishTime: this.state.finishTime,
                                                });
                                            }}/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={3}>
                                <ControlLabel>Start time</ControlLabel>
                            </Col>
                            <Col sm={8}>
                                <TimePicker start={timeFormat.secondsToSmallHhmm(this.state.startWorkTime)}
                                            end={timeFormat.secondsToSmallHhmm(this.state.finishWorkTime)} step={30}
                                            value={this.state.startTime}
                                            onChange={(value) => {
                                                this.setState({startTime: value});
                                                this.onChange({
                                                    id: this.state.id,
                                                    userId: this.state.userId,
                                                    submissionData: this.state.submissionData,
                                                    startTime: value,
                                                    bookingDateTime: this.state.bookingDateTime,
                                                    finishTime: this.state.finishTime,
                                                })
                                            }}/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={3}>
                                <ControlLabel>End time</ControlLabel>
                            </Col>
                            <Col sm={8}>
                                <TimePicker start={timeFormat.secondsToSmallHhmm(this.state.startWorkTime)}
                                            end={timeFormat.secondsToSmallHhmm(this.state.finishWorkTime)} step={30}
                                            value={this.state.finishTime}
                                            onChange={(value) => {
                                                this.setState({finishTime: value});
                                                this.onChange({
                                                    id: this.state.id,
                                                    userId: this.state.userId,
                                                    submissionData: this.state.submissionData,
                                                    startTime: this.state.startTime,
                                                    bookingDateTime: this.state.bookingDateTime,
                                                    finishTime: value,
                                                })
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


