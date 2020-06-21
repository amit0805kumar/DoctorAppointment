export const FETCH_API = 'scenes/addProjects/data/FETCH_API';

export const initiateItems = (payload) => {
    return {
        type: FETCH_API,
        payload
    }
}

export const FETCH_EMERGENCY_DOCTORS = 'scenes/addProjects/data/FETCH_EMERGENCY_DOCTORS';

export const getEmergencyDoctors = (payload) => {
    return {
        type: FETCH_EMERGENCY_DOCTORS,
        payload
    }
}