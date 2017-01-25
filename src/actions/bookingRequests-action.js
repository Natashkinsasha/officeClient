import * as types from '../actions/action-types';

export function postBookingRequestsSucces(response) {
    return {
        type: types.POST_BOOKINGREQUESTS_SUCCESS,
        response: response,
    };
}

export function postBookingRequestsUnsucces(response) {
    return {
        type: types.POST_BOOKINGREQUESTS_UNSUCCESS,
        response: response,
    };
}

export function closeBookingRequestsResponse() {
    return {
        type: types.CLOSE_BOOKINGREQUEST_RESPONSE,
    };

}

export function initialState() {
    return {
        type: types.INITIAL_STATE,
    };
}

export function addBookingRequest(bookingRequest) {

    return {
        type: types.ADD_BOOKINGREQUEST,
        bookingRequest: bookingRequest,
    };
}

export function removeBookingRequest(id) {
    return {
        type: types.REMOVE_BOOKINGREQUEST,
        id: id,
    };
}

export function updateBookingRequest(bookingRequest) {
    return {
        type: types.UPDATE_BOOKINGREQUEST,
        bookingRequest: bookingRequest,
    };
}





