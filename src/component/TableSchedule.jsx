import React from "react";
import {Form, ControlLabel, FormControl, FormGroup} from 'react-bootstrap'
import moment from 'moment'
import timeFormat from 'time-format-utils'
class TableSchedule extends React.Component {
    constructor(props) {
        super(props);
    }

    daySchedulesConvert = (daySchedules) => {
        return _.reduce(daySchedules, (result, daySchedule) => {
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

            var newStringDaySchedule = newDaySchedule.date + "\n" + _.reduce(newDaySchedule.reservations, (result, reservation) => {
                    return result + reservation.start + " " + reservation.finish + " " + reservation.userId + "\n";
                }, "");
            return result + newStringDaySchedule;
        }, "")
    }

    render() {
        return (
            <div>
                <Form horizontal>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Sсhedule</ControlLabel>
                        <FormControl style={{height: 200}} componentClass="textarea" readOnly
                                     value={this.daySchedulesConvert(this.props.daySchedules)}/>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default TableSchedule;