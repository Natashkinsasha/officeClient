import axios from "axios";
import store from "../store/configureStore";
import * as types from "../actions/bookingRequests-action";

import moment from 'moment'

const baseAxiosConfig = axios.create({
    baseURL: 'https://localhost:8080/',
    responseType: 'json',
});


export function addBookingRequest(bookingRequest) {
    store.dispatch(types.addBookingRequest(bookingRequest));
}

export function removeBookingRequest(id) {
    store.dispatch(types.removeBookingRequest(id));
}

export function closeBookingRequestsResponse() {
    store.dispatch(types.closeBookingRequestsResponse());
}

export function clearReducer() {
    store.dispatch(types.initialState());
}

export function updateBookingRequest(bookingRequest) {
    store.dispatch(types.updateBookingRequest(bookingRequest));
}

export function postBookingRequests(startWorkTime, finishWorkTime, bookingRequests) {
    axios.post('/api/bookingRequest/createWithArray', [bookingRequests, [baseAxiosConfig, axios.create({
        params: {
            startWorkTime: startWorkTime,
            finishWorkTime: finishWorkTime
        }
    })]]).then(response => {
        store.dispatch(types.postBookingRequestsSucces());
    }).catch(error => {
        store.dispatch(types.postBookingRequestsUnsucces(error.response));
    })
}





