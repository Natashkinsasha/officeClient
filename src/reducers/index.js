import {combineReducers} from 'redux'
import bookingRequestsReducer  from './bookingRequests-reducer'
import daySchedulesReducer from './daySchedules-reducer'
import parametersReducer from './parametrs-reducer'

const rootReducer = combineReducers({
    bookingRequestsState: bookingRequestsReducer,
    daySchedulesState: daySchedulesReducer,
    parametersState: parametersReducer
});

export default rootReducer