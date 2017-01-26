import {combineReducers} from 'redux'
import bookingRequestsReducer  from './bookingRequests-reducer'
import daySchedulesReducer from './daySchedules-reducer'


const rootReducer = combineReducers({
    bookingRequestsState: bookingRequestsReducer,
    daySchedulesState: daySchedulesReducer
});

export default rootReducer