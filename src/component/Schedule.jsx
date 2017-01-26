import React from "react";
import {Well, Button, Row, Col, FormGroup, FormControl, ControlLabel, Thumbnail, Form} from 'react-bootstrap';
import BookingRequest from '../component/BookingRequest.jsx';
import moment from 'moment';
import uniqueid from 'uniqueid';
import TimePicker from 'react-bootstrap-time-picker';
import timeFormat from 'time-format-utils';
import lodash from 'lodash';

class Schedule extends React.Component {


    constructor(props) {
        super(props);
    }

    daySchedulesConvert = (daySchedules) => {
        return _.map(daySchedules, (daySchedule) => {
            var newDaySchedule = {
                date: moment.unix(daySchedule.date).format("YYYY-MM-DD"),
                reservations: _.map(daySchedule.reservations, (reservation) => {
                    return {
                        userId: reservation.userId,
                        start: timeFormat.secondsToSmallHhmm(reservation.startDuration),
                        finish: timeFormat.secondsToSmallHhmm(reservation.finishDuration)
                    }
                })
            }
            var newStringDaySchedule = newDaySchedule.date + "\n" + _.map(newDaySchedule.reservations, (reservation) => {
                    return reservation.start + " " + reservation.finish + " " + reservation.userId +"\n";
                });
            return newStringDaySchedule;
        })
    }


    render() {
        return (
            <div>

                    <Form horizontal>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Sсhedule</ControlLabel>
                            <FormControl  style={{ height: 200 }}  componentClass="textarea" readOnly
                                         value={this.daySchedulesConvert(this.props.daySchedules)}/>
                        </FormGroup>
                    </Form>

            </div>

        )
    }
}

export default Schedule;
