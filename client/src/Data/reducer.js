import * as actions from './action';
import { combineReducers } from 'redux';
const initialState = [];

const availableDoctorsReducer = (state = initialState, action) => {

    switch (action.type) {
        case actions.FETCH_API:
            return [...state, action.payload]
        default:
            return state;
    }
}

const emergencyDoctorsReducer = (state = initialState, action) => {

    switch (action.type) {
        case actions.FETCH_EMERGENCY_DOCTORS:
            return [...state, action.payload]
        default:
            return state;
    }
}

export const reducer = combineReducers({
    availableDoctors: availableDoctorsReducer,
    emergencyDoctorsReducer
})