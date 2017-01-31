import * as types from "../actions/action-types";
const initialState = {
        response: null,
        daySchedules: [],
    }
    ;

const daySchedulesReducer = function (state = initialState, action) {
    switch (action.type) {
        case types.REMOVE_DAYSCHEDULES:
            return Object.assign({}, state, {daySchedules: []});

        case types.DELETE_BOOKINGREQUESTS_SUCCESS:
            return Object.assign({}, state, {daySchedules: []});

        case types.GET_DAYSCHEDULES_SUCCESS:
            return Object.assign({}, state, {daySchedules: action.daySchedules, response: action.response});

        case types.GET_DAYSCHEDULES_UNSUCCESS:
            return Object.assign({}, state, {response: action.response});

        case types.INITIAL_STATE:
            return Object.assign({}, state, initialState);

        case types.CLOSE_DAYSCHEDULES_RESPONSE:
            return Object.assign({}, state, {response: null});
    }
    return state;
}

export default daySchedulesReducer;