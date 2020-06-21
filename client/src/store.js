import { createStore, combineReducers , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducer as availableDoctors } from "./Data/reducer"

const appReducers = combineReducers({
    availableDoctors
})

export const store =  createStore(
    appReducers,
    applyMiddleware(thunk)
)