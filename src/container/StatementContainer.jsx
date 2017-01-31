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

class StatementContainer extends React.Component {

    state ={
        bookingRequests: [],
        statementResponse: null,
    }

    add = (bookingRequest) => {
        var newbookingRequests = _.concat(state.bookingRequests, action.bookingRequest);
        this.setState({bookingRequests: newbookingRequests});
    }

    remove = (id) => {
        var newbookingRequests = _.filter(state.bookingRequests, (bookingRequest) => bookingRequest.id != action.id);
        this.setState({bookingRequests: newbookingRequests});

    }

    updateBookingRequest = (bookingRequest) => {
        var newbookingRequests = _.cloneDeep(state.bookingRequests);
        var index = _.indexOf(newbookingRequests, _.find(newbookingRequests, {id: action.bookingRequest.id}));
        newbookingRequests[index] = action.bookingRequest;
        this.setState({bookingRequests: newbookingRequests});
    }

    closeStatementResponse =  () => {
        this.setState({statementResponse: null});
    }

    post = () => {
        return bookingRequestsApi.postBookingRequests(this.props.bookingRequests).then((response)=>{
            this.setState({statementResponse: response});
        }).catch((error)=>{
            this.setState({statementResponse: error.response});
        });
    }


    render() {
        return (
            <div>
                <Row>
                    <CleverPanel response={this.state.statementResponse}
                                 onClose={this.closeStatementResponse}/>
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <Statement bookingRequests={this.state.bookingRequests}
                                   onAdd={this.add}
                                   onRemove={this.remove}
                                   onPost={this.post}
                                   onUpdate={this.updateBookingRequest}/>
                    </Col>
                </Row>
            </div>
        )
    }
}





export default StatementContainer;