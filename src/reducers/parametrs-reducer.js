import * as types from "../actions/action-types";
import moment from 'moment'

const initialState = {
        startWorkTime: 0,
        finishWorkTime: 0,
        startData: moment().toISOString(),
        finishData: moment().toISOString(),
    }
    ;

const parametersReducer = function (state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_PARAMETERS:
            return Object.assign({}, state, action.parameters);
    }
    return state;
}

export default parametersReducer;
