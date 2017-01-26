import * as types from "../actions/action-types";
const initialState = {
        daySchedules: [],
    }
    ;

const daySchedulesReducer = function (state = initialState, action) {
    switch (action.type) {
        case types.REMOVE_DAYSCHEDULES:
            return Object.assign({}, state, {daySchedules: []});

        case types.ADD_DAYSCHEDULES:
            return Object.assign({}, state, {daySchedules: action.daySchedules});

        case types.INITIAL_STATE:
            return Object.assign({}, state, initialState);
    }
    return state;
}

export default daySchedulesReducer;