import axios from "axios";
import store from "../store/configureStore";
import * as typesBookingRequests from "../actions/bookingRequests-action";
import * as typesDaySchedule  from "../actions/daySchedule-action";





export function addBookingRequest(bookingRequest) {
    store.dispatch(typesBookingRequests .addBookingRequest(bookingRequest));
}

export function removeBookingRequest(id) {
    store.dispatch(typesBookingRequests .removeBookingRequest(id));
}

export function closeBookingRequestsResponse() {
    store.dispatch(typesBookingRequests .closeBookingRequestsResponse());
}

export function clearReducer() {
    store.dispatch(typesBookingRequests .initialState());
}

export function updateBookingRequest(bookingRequest) {
    store.dispatch(typesBookingRequests .updateBookingRequest(bookingRequest));
}

export function postBookingRequests(startWorkTime, finishWorkTime, bookingRequests) {
    axios.post('/api/bookingRequest/createWithArray', bookingRequests, {
        params: {
            startWorkTime: startWorkTime,
            finishWorkTime: finishWorkTime
        },
        baseURL: 'http://localhost:8080/',
        responseType: 'json',
    }).then(response => {

        store.dispatch(typesBookingRequests.postBookingRequestsSucces(response));
        store.dispatch(typesDaySchedule.removeDaySchedules())
        store.dispatch(typesDaySchedule.addDaySchedules(response.data));
    }).catch(error => {
        store.dispatch(typesBookingRequests .postBookingRequestsUnsucces(error.response));
    })
}




