import axios from "axios";
import store from "../store/configureStore";
import * as typesBookingRequests from "../actions/bookingRequests-action";
import * as typesDaySchedule  from "../actions/daySchedule-action";
import moment from 'moment'


export function postBookingRequests(bookingRequests) {
    var newBookingRequests = _.map(bookingRequests, (bookingRequest) => {
        var duration = bookingRequest.finishTime - bookingRequest.startTime;
        var submissionTime = Number(moment(bookingRequest.submissionData).startOf('day').format('X')) + bookingRequest.startTime;
        var newBookingRequest = {
            bookingDateTime: bookingRequest.bookingDateTime,
            userId: bookingRequest.userId,
            submissionTime: submissionTime,
            duration: duration
        };
        return newBookingRequest;
    })

    axios.post('/api/bookingRequest/createWithArray', newBookingRequests, {
        baseURL: 'http://localhost:8080/',
        responseType: 'json',
    }).then(response => {
        store.dispatch(typesBookingRequests.postBookingRequestsSucces(response));
    }).catch(error => {
        store.dispatch(typesBookingRequests.postBookingRequestsUnsucces(error.response));
    })
}

export function deleteAllBookingRequests() {
    axios.delete('api/bookingRequest', {
        baseURL: 'http://localhost:8080/',
    }).then(response => {
        store.dispatch(typesBookingRequests.deleteBookingRequestsSuccess(response));
        store.dispatch(typesDaySchedule.removeDaySchedules());
    }).catch(error => {
        store.dispatch(typesBookingRequests.deleteBookingRequestsUnsuccess(error.response));
    })
}




