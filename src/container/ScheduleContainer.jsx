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
import moment from 'moment';

class ScheduleContainer extends React.Component {

    state = {
        scheduleResponse: null,
        parameters: {
            startWorkTime: 0,
            finishWorkTime: 0,
            startData: moment().toISOString(),
            finishData: moment().toISOString(),
        },
        bookingRequests: []
    }

    updateParameters = (parameters) => {
        this.setState({parameters: Object.assign({}, this.state.parameters, parameters)});
    }

    closeScheduleResponse = () => {
        this.setState({response: null});
    }

    search = () => {
        return bookingRequestsApi.getBookingRequests(1,5,"userId","test",this.state.parameters.startWorkTime,
            this.state.parameters.finishWorkTime,
            this.state.parameters.startData,
            this.state.parameters.finishData
        ).then((response) => {
            this.setState({response: response, bookingRequests: response.data});
        }).catch((error) => {
            this.setState({response: error.response});
        });
    }

    deleteAll = () => {
        return bookingRequestsApi.deleteAllBookingRequests().then((response) => {
            this.setState({response: response});
        }).catch((error) => {
            this.setState({response: error.response})
        })
    }

    closeScheduleResponse = () => {
        this.setState({response: null});
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Row>
                    <CleverPanel response={this.state.scheduleResponse} onClose={this.closeScheduleResponse}/>
                </Row>
                <Row>
                    <Schedule bookingRequests={this.state.bookingRequests}
                              parameters={this.state.parameters}
                              onDeleteAll={this.deleteAll}
                              onSearch={this.search}
                              onUpdate={this.updateParameters}/>
                </Row>
            </div>
        )
    }
}


export default ScheduleContainer;