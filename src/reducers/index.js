import {combineReducers} from 'redux'
import bookingRequestsReducer  from './bookingRequests-reducer'


const rootReducer = combineReducers({
    bookingRequestsState:bookingRequestsReducer,
});

export default rootReducer