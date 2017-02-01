import React from 'react'
import App from '../component/App.jsx'
import CleverPanel from '../component/CleverPanel.jsx'
import CleverModal from '../component/CleverModal.jsx'
import Schedule from '../component/Schedule.jsx'
import Statement from '../component/Statement.jsx'
import {Row, Col} from 'react-bootstrap'
import {connect} from "react-redux";
import * as bookingRequestsApi from '../api/bookingRequests-api';
import * as scheduleApi from '../api/schedule-api'
import * as typesBookingRequests from "../actions/bookingRequests-action";
import * as typesParameters from "../actions/parameterSerch-action"
import * as typesDaySchedule  from "../actions/daySchedule-action";
import moment from 'moment';

class ScheduleContainer extends React.Component {

    state = {
        successResponse: null,
        errorResponse:null,
        parameters: {
            startWorkTime: 0,
            finishWorkTime: 0,
            startData: moment().toISOString(),
            finishData: moment().toISOString(),
        },
        bookingRequests: {
            content: [],
            size: 5,
            totalElements: 0,
            sortName: ["userId"],
            sortOrder: "asc"
        }
    }

    updateParameters = (parameters) => {
        this.setState({parameters: Object.assign({}, this.state.parameters, parameters)});
    }

    closeScheduleResponse = () => {
        this.setState({response: null});
    }

    deleteAll = () => {
        return bookingRequestsApi.deleteAllBookingRequests().then((response) => {
            this.setState({successResponse: response});
        }).catch((error) => {
            this.setState({errorResponse: error.response})
        })
    }

    closeErrorResponse = () => {
        this.setState({errorResponse: null});
    }

    closeSuccessResponse = () => {
        this.setState({successResponse: null});
    }

    searchHolder = (page, size, sortBy, direction) => {
        return bookingRequestsApi.getBookingRequests(page, size, sortBy, direction, this.state.parameters.startWorkTime,
            this.state.parameters.finishWorkTime,
            this.state.parameters.startData,
            this.state.parameters.finishData
        ).then((response) => {
            this.setState({
                successResponse: response,
                bookingRequests: Object.assign({}, this.state.bookingRequests, response.data)
            });
        }).catch((error) => {
            this.setState({errorResponse: error.response});
        });
    }

    search = () => {
        this.searchHolder(0, this.state.bookingRequests.size, this.state.bookingRequests.sortName, this.state.bookingRequests.sortOrder);
    }

    onPageChange = (page, sizePerPage) => {
        if (this.state.bookingRequests.totalElements == 0) {
            this.setState({
                bookingRequests: Object.assign({}, this.state.bookingRequests, {
                    size: sizePerPage,
                    number: page
                })
            });
        } else {
            return this.searchHolder(page - 1, sizePerPage, this.state.bookingRequests.sortName, this.state.bookingRequests.sortOrder);
        }
    }

    onSizePerPageList = (sizePerPage) => {
        if (this.state.bookingRequests.totalElements == 0) {
            this.setState({bookingRequests: Object.assign({}, this.state.bookingRequests, {size: sizePerPage})});
        } else {
            return this.searchHolder(0, sizePerPage, this.state.bookingRequests.sortName, this.state.bookingRequests.sortOrder);
        }
    }

    onSortChange = (sortName, sortOrder) => {
        switch (sortName) {
            case "userId":
                sortName=["userId"];
                this.setState({
                    bookingRequests: Object.assign({}, this.state.bookingRequests, {
                        sortName: sortName,
                        sortOrder: sortOrder
                    })
                });
                break;
            case "data":
                sortName=["startSubmissionData", "startSubmissionTime"];
                this.setState({
                    bookingRequests: Object.assign({}, this.state.bookingRequests, {
                        sortName: sortName,
                        sortOrder: sortOrder
                    })
                });
                break;
            case "time":
                sortName=["startSubmissionTime"];
                this.setState({
                    bookingRequests: Object.assign({}, this.state.bookingRequests, {
                        sortName: sortName,
                        sortOrder: sortOrder
                    })
                });
                break;
            case "bookingDateTime":
                sortName=["startSubmissionTime"];
                this.setState({
                    bookingRequests: Object.assign({}, this.state.bookingRequests, {
                        sortName: sortName,
                        sortOrder: sortOrder
                    })
                });
                break;

            default:
                return;
        }
        if (this.state.bookingRequests.totalElements != 0) {
            return this.searchHolder(0, this.state.bookingRequests.size, sortName, sortOrder)
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Schedule bookingRequests={this.state.bookingRequests}
                              parameters={this.state.parameters}
                              onDeleteAll={this.deleteAll}
                              onSearch={this.search}
                              onUpdate={this.updateParameters}
                              onPageChange={this.onPageChange}
                              onSizePerPageList={this.onSizePerPageList}
                              onSortChange={this.onSortChange}
                    />
                </Row>
            </div>
        )
    }
}


export default ScheduleContainer;