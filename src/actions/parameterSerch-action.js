import * as types from '../actions/action-types';

export function updateParameters(parameters) {
    return {
        type: types.UPDATE_PARAMETERS,
        parameters: parameters,
    };
}




