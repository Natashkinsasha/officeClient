import * as types from "../actions/action-types";
import moment from 'moment'

const initialState = {
        parameters :{
            startWorkTime: 0,
            finishWorkTime: 0,
            startData: moment().toISOString(),
            finishData: moment().toISOString(),
        },
        response: null,
    }
    ;

const parametersReducer = function (state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_PARAMETERS:
            console.log(Object.assign({}, state.parameters, action.parameters))
            return Object.assign({}, state, {parameters: Object.assign({}, state.parameters, action.parameters)});
        case types.CLOSE_PARAMETERS_RESPONSE:
            return Object.assign({}, state, {response: null});
    }
    return state;
}

export default parametersReducer;
