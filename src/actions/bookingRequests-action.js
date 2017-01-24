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
        types: types.CLOSE_BOOKINGREQUEST_RESPONSE,
    };

}

export function initialState() {
    return {
        types: types.INITIAL_STATE,
    };
}

export function addBookingRequest(bookingRequest) {
    return {
        types: types.ADD_BOOKINGREQUEST,
        bookingRequest:bookingRequest,
    };
}

export function removeBookingRequest(id) {
    return {
        types: types.REMOVE_BOOKINGREQUEST,
        id:id,
};
}



