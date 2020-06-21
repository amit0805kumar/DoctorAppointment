import axios from 'axios';

import * as action from './action.js';

export const availableDoctorsApi = (data) => (dispatch) => {
    const url = 'http://192.168.137.1:5000/availableDoctors';
   
    const bodyData = {
        from : +data.start,
        to: +data.end
    }
    axios.post(url, bodyData)
        .then((response) => {
            dispatch(action.initiateItems(response.data));
        },
            err => {
                dispatch({ type: "error" });
            })
}

export const getEmergencyDocssApi = () => (dispatch) => {
    const url = 'http://192.168.137.1:5000/getEmergencyDocs';
    axios.get(url)
        .then((response) => {
            dispatch(action.getEmergencyDoctors(response.data));
        },
            err => {
                dispatch({ type: "error" });
            })
}
