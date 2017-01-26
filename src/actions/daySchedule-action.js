import * as types from '../actions/action-types';

export function addDaySchedules(daySchedules) {
    return {
        type: types.ADD_DAYSCHEDULES,
        daySchedules: daySchedules,
    };
}


export function removeDaySchedules() {
    return {
        type: types.REMOVE_DAYSCHEDULES,
    };
}


