import axios from "axios";
import store from "../store/configureStore";
import * as action from "../actions/bookingRequests-action";

import moment from 'moment'

const baseAxiosConfig = axios.create({
    baseURL: 'https://localhost:8080/',
    responseType: 'json',
});


export function addBookingRequest(bookingRequest) {
    store.dispatch(action.addBookingRequest(bookingRequest));
}

export function removeBookingRequest(id) {
    store.dispatch(action.removeBookingRequest(id));
}

export function closeBookingRequestsResponse() {
    store.dispatch(action.closeBookingRequestsResponse());
}

export function clearReducer() {
    store.dispatch(action.initialState());
}

export function postBookingRequests(startWorkTime, finishWorkTime, bookingRequests) {
    axios.post('/api/bookingRequest/createWithArray', [bookingRequests, [baseAxiosConfig, axios.create({
        params: {
            startWorkTime: startWorkTime,
            finishWorkTime: finishWorkTime
        }
    })]]).then(response => {
        store.dispatch(action.postBookingRequestsSucces());
    }).catch(error => {
        store.dispatch(action.postBookingRequestsUnsucces(error.response));
    })
}





