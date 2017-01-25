import * as types from "../actions/action-types";
import lodash from 'lodash';
const initialState = {
        response: null,
        bookingRequests: [],
    }
    ;

const bookingRequestsReducer = function (state = initialState, action) {
    switch (action.type) {

        case types.POST_BOOKINGREQUESTS_SUCCESS:
            return Object.assign({}, state, {bookingRequests: [], response: action.response});

        case types.POST_BOOKINGREQUESTS_UNSUCCESS:
            return Object.assign({}, state, {response: action.response});

        case types.CLOSE_BOOKINGREQUEST_RESPONSE:
            return Object.assign({}, state, {response: null});

        case types.INITIAL_STATE:
            return Object.assign({}, state, initialState);

        case types.REMOVE_BOOKINGREQUEST:
            var newbookingRequests = _.filter(state.bookingRequests, bookingRequests => bookingRequest.id != action.id);
            return Object.assign({}, state, {bookingRequests: newbookingRequests});

        case types.ADD_BOOKINGREQUEST:
            var newbookingRequests = _.concat(state.bookingRequests, action.bookingRequest);
            return Object.assign({}, state, {bookingRequests: newbookingRequests});

        case types.UPDATE_BOOKINGREQUEST:
            var newbookingRequests = _.cloneDeep(state.bookingRequests);
            var index = _.indexOf(newbookingRequests, _.find(newbookingRequests, {id: action.bookingRequest.id}));
            newbookingRequests[index]=action.bookingRequest;
            return Object.assign({}, state, {bookingRequests: newbookingRequests});

    }
    return state;
}

export default bookingRequestsReducer;