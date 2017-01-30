import React from 'react'
import App from '../component/App.jsx'
import CleverPanel from '../component/CleverPanel.jsx'
import Schedule from '../component/Schedule.jsx'
import Statement from '../component/Statement.jsx'
import {Row, Col} from 'react-bootstrap'
import {connect} from "react-redux";
import * as bookingRequestsApi from '../api/bookingRequests-api';
import * as scheduleApi from '../api/schedule-api'
import * as typesBookingRequests from "../actions/bookingRequests-action";
import * as typesParameters from "../actions/parameterSerch-action"
import * as typesDaySchedule  from "../actions/daySchedule-action";

class AppContainer extends React.Component {

    post = () => {
        bookingRequestsApi.postBookingRequests(this.props.bookingRequests);
    }


    search = () => {
        scheduleApi.getSchedule(this.props.parameters.startWorkTime,
            this.props.parameters.finishWorkTime,
            this.props.parameters.startData,
            this.props.parameters.finishData
        )
    }

    deleteAll = () => {
        bookingRequestsApi.deleteAllBookingRequests();
    }

    render() {
        return (
            <div>
                <App>
                    <Row>
                        <CleverPanel response={this.props.scheduleResponse} onClose={this.props.closeScheduleResponse}/>
                    </Row>
                    <Row>
                        <CleverPanel response={this.props.statementResponse} onClose={this.props.closeStatementResponse}/>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <Statement bookingRequests={this.props.bookingRequests}
                                       onAdd={this.props.add}
                                       onRemove={this.props.remove}
                                       onPost={this.post}
                                       onUpdate={this.props.updateBookingRequest}/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Schedule daySchedules={this.props.daySchedules}
                                      parameters={this.props.parameters}
                                      onDeleteAll={this.deleteAll}
                                      onSearch={this.search}
                                      onUpdate={this.props.updateParameters}
                            />
                        </Col>
                    </Row>
                </App>
            </div>
        )
    }
}


const mapStateToProps = (store) => {
    return {
        bookingRequests: store.bookingRequestsState.bookingRequests,
        daySchedules: store.daySchedulesState.daySchedules,
        statementResponse: store.bookingRequestsState.response,
        scheduleResponse: store.daySchedulesState.response,
        parameters: store.parametersState.parameters
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        add: (bookingRequest) => {
            dispatch(typesBookingRequests.addBookingRequest(bookingRequest));
        },

        remove: (id) => {
            dispatch(typesBookingRequests.removeBookingRequest(id));
        },

        updateBookingRequest: (bookingRequest) => {
            dispatch(typesBookingRequests.updateBookingRequest(bookingRequest));
        },

        updateParameters: (parameters) => {
            dispatch(typesParameters.updateParameters(parameters))
        },

        closeStatementResponse: () =>{
            dispatch(typesBookingRequests.closeBookingRequestsResponse())
        },

        closeScheduleResponse: () =>{
            dispatch(typesDaySchedule.closeDaySchedulesResponse())
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps, )(AppContainer);