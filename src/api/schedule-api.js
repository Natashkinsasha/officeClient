import axios from "axios";
import store from "../store/configureStore";
import * as typesBookingRequests from "../actions/bookingRequests-action";
import * as typesDaySchedule  from "../actions/daySchedule-action";
import * as typesParameters from "../actions/parameterSerch-action"
import moment from 'moment'

export function getSchedule(startWorkTime, finishWorkTime, startData, finishData) {
    axios.get('/api/daySchedule', {
        params: {
            startWorkTime: startWorkTime,
            finishWorkTime: finishWorkTime,
            startData: Number(moment(startData).startOf('day').format('X')),
            finishData: Number(moment(finishData).startOf('day').add(1,"d").format('X')),
        },
        baseURL: 'http://localhost:8080/',
        responseType: 'json',
    }).then(response => {
        store.dispatch(typesDaySchedule.addDaySchedules(response.data));
    }).catch(error => {

    })
}