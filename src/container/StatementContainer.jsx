import React from 'react'
import App from '../component/App.jsx'
import CleverPanel from '../component/CleverPanel.jsx'
import Schedule from '../component/Schedule.jsx'
import Statement from '../component/Statement.jsx'
import CleverModal from '../component/CleverModal.jsx'
import {Row, Col} from 'react-bootstrap'
import {connect} from "react-redux";
import * as bookingRequestsApi from '../api/bookingRequests-api';
import * as scheduleApi from '../api/schedule-api'
import * as typesBookingRequests from "../actions/bookingRequests-action";
import * as typesParameters from "../actions/parameterSerch-action"
import * as typesDaySchedule  from "../actions/daySchedule-action";

class StatementContainer extends React.Component {

    state = {
        bookingRequests: [],
        successResponse: null,
        errorResponse: null,
    };


    add = (bookingRequest) => {
        var newbookingRequests = _.concat(this.state.bookingRequests, bookingRequest);
        this.setState({bookingRequests: newbookingRequests});
    };

    remove = (id) => {
        var newbookingRequests = _.filter(this.state.bookingRequests, (bookingRequest) => bookingRequest.id != id);
        this.setState({bookingRequests: newbookingRequests});

    };

    updateBookingRequest = (bookingRequest) => {
        var newbookingRequests = _.cloneDeep(this.state.bookingRequests);
        var index = _.indexOf(newbookingRequests, _.find(newbookingRequests, {id: bookingRequest.id}));
        newbookingRequests[index] = bookingRequest;
        this.setState({bookingRequests: newbookingRequests});
    };

    closeErrorResponse = () => {
        this.setState({errorResponse: null});
    }

    closeSuccessResponse = () => {
        this.setState({successResponse: null});
    }

    post = () => {
        return bookingRequestsApi.postBookingRequests(this.state.bookingRequests).catch((error) => {
            return Promise.reject(error.response);
        }).then((response) => {
            if (response.data.length != 0) {
                return Promise.reject(response);
            }
            return response
        }).then((response) => {
            console.log(response.data)
            this.setState({successResponse: response, bookingRequests: []});
        }).catch((response) => {
            console.log(response.data)
            this.setState({errorResponse: response, bookingRequests: []});
        });
    };


    render() {
        return (
            <div>
                <CleverModal response={this.state.errorResponse} close={this.closeErrorResponse}/>
                <Row>
                    <Col lgOffset={3}  lg={6} mdOffset={3} md={6} sm={12}>
                        <Statement bookingRequests={this.state.bookingRequests}
                                   onAdd={this.add}
                                   onRemove={this.remove}
                                   onPost={this.post}
                                   onUpdate={this.updateBookingRequest}/>
                    </Col>
                </Row>

                    <CleverPanel response={this.state.successResponse}
                                 onClose={this.closeSuccessResponse}/>


            </div>
        )
    }
}


export default StatementContainer;