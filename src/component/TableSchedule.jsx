import React from "react";
import {Form, ControlLabel, FormControl, FormGroup} from 'react-bootstrap'
import timeFormat from 'time-format-utils'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import moment from 'moment';
import TimeFormat from 'time-format-utils'
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

class TableSchedule extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        function bookingDataFormatter(cell, row) {
            return moment.unix(row.bookingDateTime).format("MM-DD-YYYY HH:mm");
        }

        function submissionDataFormatter(cell, row) {
            return moment.unix(row.startSubmissionData).format("YYYY-MM-DD");
        }

        function durationFormatter(cell, row) {
            return TimeFormat.secondsToHhmm(row.startSubmissionTime) + " - " + TimeFormat.secondsToHhmm(row.finishSubmissionTime);
        }

        return (
            <div>
                <BootstrapTable data={this.props.bookingRequests.content} remote={ true } pagination={ true }
                                fetchInfo={ {dataTotalSize: this.props.bookingRequests.totalElements} }
                                options={ {
                                    sizePerPage: this.props.bookingRequests.size,
                                    onPageChange: this.props.onPageChange,
                                    sizePerPageList: [5, 10],
                                    pageStartIndex: 1,
                                    page: this.props.bookingRequests.number + 1,
                                    onSizePerPageList: this.props.onSizePerPageList,
                                    onSortChange: this.props.onSortChange
                                } }
                                striped hover condensed>
                    <TableHeaderColumn dataField="id" isKey={true} hidden>Id</TableHeaderColumn>
                    <TableHeaderColumn dataField="userId" dataSort={ true }>User id</TableHeaderColumn>
                    <TableHeaderColumn dataField="bookingDateTime" dataFormat={bookingDataFormatter} dataSort={ true }>Booking data</TableHeaderColumn>
                    <TableHeaderColumn dataField="data" dataFormat={submissionDataFormatter} dataSort={ true }>Submission data</TableHeaderColumn>
                    <TableHeaderColumn dataField="time" dataFormat={durationFormatter}>Time</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default TableSchedule;