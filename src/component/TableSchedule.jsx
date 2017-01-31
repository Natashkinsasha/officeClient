import React from "react";
import {Form, ControlLabel, FormControl, FormGroup} from 'react-bootstrap'
import timeFormat from 'time-format-utils'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import moment from 'moment';
import TimeFormat from 'time-format-utils'

class TableSchedule extends React.Component {
    constructor(props) {
        super(props);
    }




    render() {

        console.log(this.props)
        function dataFormatter(cell, row) {
            return moment(row.startSubmissionData).format("dddd, MMMM Do YYYY");
        }

        function durationFormatter(cell, row) {
            return TimeFormat.secondsToHhmm(row.startSubmissionTime)+" - "+TimeFormat.secondsToHhmm(row.finishSubmissionTime);
        }

        return (
            <div>
                <BootstrapTable data={this.props.bookingRequests} remote={ true } pagination={ true } striped hover condensed>
                    <TableHeaderColumn dataField="id" isKey={true} hidden>Id</TableHeaderColumn>
                    <TableHeaderColumn dataField="userId" >User id</TableHeaderColumn>
                    <TableHeaderColumn dataFormat={dataFormatter}>Submission data</TableHeaderColumn>
                    <TableHeaderColumn dataFormat={durationFormatter}>Time</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default TableSchedule;