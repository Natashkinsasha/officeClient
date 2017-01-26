import React from 'react'
import App from '../component/App.jsx'
import CleverPanel from '../component/CleverPanel.jsx'
import Schedule from '../component/Schedule.jsx'
import Statement from '../component/Statement.jsx'
import {Row, Col} from 'react-bootstrap'
import {connect} from "react-redux";
import * as bookingRequestsApi from '../api/bookingRequests-api';

class AppContainer extends React.Component {


    post = (startWorkTime, finishWorkTime, bookingRequests) => {
        bookingRequestsApi.postBookingRequests(startWorkTime, finishWorkTime, bookingRequests);
    }

    add = (bookingRequest) => {
        bookingRequestsApi.addBookingRequest(bookingRequest);
    }

    remove = (id) => {
        bookingRequestsApi.removeBookingRequest(id);
    }

    update = (bookingRequest) => {
        bookingRequestsApi.updateBookingRequest(bookingRequest);
    }


    render() {
        return (
            <div>
                <App>
                    <Row>
                        <CleverPanel response = {this.props.response}/>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <Statement bookingRequests={this.props.bookingRequests} onAdd={this.add}
                                       onRemove={this.remove}
                                       onPost={this.post} onUpdate={this.update}/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Schedule daySchedules={this.props.daySchedules}/>
                        </Col>
                    </Row>
                </App>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        daySchedules: store.daySchedulesState.daySchedules,
        bookingRequests: store.bookingRequestsState.bookingRequests,
        response: store.bookingRequestsState.response
    }
};
export default connect(mapStateToProps)(AppContainer);