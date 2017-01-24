import React from "react";
import Statement from "../component/Statment.jsx";
import {connect} from "react-redux";
import store from "../store/configureStore"
import * as bookingRequestsApi from "../api/bookingRequests-api"

class BookingRequestContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    post(startWorkTime, finishWorkTime, bookingRequests) {
        bookingRequestsApi.postBookingRequests(startWorkTime, finishWorkTime, bookingRequests);
    }

    add(bookingRequest) {
        bookingRequestsApi.addBookingRequest(bookingRequest);
    }

    remove(id){
        bookingRequestsApi.removeBookingRequest(id);
    }


    render() {
        return (
            <div>
                <Statement bookingRequests={this.props.bookingRequests} onAddClick={this.add} onRemoveClick={this.remove} onPostClick={this.post}/>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        bookingRequests:store.bookingRequestsState.bookingRequests,
        response: store.bookingRequestsState.response
    }
};

export default connect(mapStateToProps)(BookingRequestContainer);