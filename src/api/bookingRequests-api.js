import axios from "axios";
import store from "../store/configureStore";
import * as typesBookingRequests from "../actions/bookingRequests-action";
import * as typesDaySchedule  from "../actions/daySchedule-action";
import moment from 'moment'


export function postBookingRequests(bookingRequests) {
    console.log(bookingRequests)
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
    return axios.post('/api/bookingRequest/createWithArray', newBookingRequests, {
        baseURL: 'http://localhost:8080/',
        responseType: 'json',
    })
}
export function deleteAllBookingRequests() {
    return axios.delete('api/bookingRequest', {
        baseURL: 'http://localhost:8080/',
    })
}

export function getBookingRequests(pageNumber, pageSize, sortBy, sortDirection, startWorkTime, finishWorkTime, startData, finishData) {
    return axios.get('api/bookingRequest', {
        params: {
            pageNumber: pageNumber,
            pageSize: pageSize,
            sortBy: sortBy,
            sortDirection: sortDirection,
            startWorkTime: startWorkTime,
            finishWorkTime: finishWorkTime,
            startData: Number(moment(startData).startOf('day').format('X')),
            finishData: Number(moment(finishData).startOf('day').add(1, "d").format('X')),
        },
        baseURL: 'http://localhost:8080/',
    })
}





