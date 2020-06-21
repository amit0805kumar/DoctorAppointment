import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED
  } from "./types";

  import axios from 'axios'
import setAuthToken from '../util/setAuthToken'


export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }
    try {
        const res = await axios.get('/api/auth')
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

export const register = ({ fname,lname, email, password,dC,freeFrom,freeTo }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ fname,lname, email, password,dC,freeFrom,freeTo })

    try {
        const res = await axios.post('/api/auth/signup', body, config)
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        })
        // dispatch(setAlert('Register Successfull', 'success'))
        dispatch(loadUser());
    } catch (error) {
        var errors = error.response.data.errors
        // if (errors) {
        //     errors.forEach(error => dispatch(setAlert(error.message, 'danger')))
        // }
        dispatch({
            type: SIGNUP_FAIL
        })
    }
}

//Login user
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password })

    try {
        const res = await axios.post('/api/auth/login', body, config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser())
    } catch (error) {
        var errors = error.response.data.errors
        // if (errors) {
        //     errors.forEach(error => dispatch(setAlert(error.message, 'danger')))
        // }
        dispatch({
            type: LOGIN_FAIL
        })
    }
}