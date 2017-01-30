import * as types from '../actions/action-types';

export function getDaySchedulesSuccess(daySchedules, response) {
    console.log("response")
    console.log(response)
    return {
        type: types.GET_DAYSCHEDULES_SUCCESS,
        daySchedules: daySchedules,
        response:response
    };
}

export function getDaySchedulesUnsuccess(daySchedules, response) {
    return {
        type: types.GET_DAYSCHEDULES_UNSUCCESS,
        response:response
    };
}


export function removeDaySchedules() {
    return {
        type: types.REMOVE_DAYSCHEDULES,
    };
}

export function closeDaySchedulesResponse() {
    return {
        type: types.CLOSE_DAYSCHEDULES_RESPONSE,
    };

}





