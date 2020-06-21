import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED
} from "../actions/types";

const initialStata = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function (state = initialStata, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
        return {
            ...state,
            isAuthenticated: true,
            loading: false,
            user: payload
        }
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      }

    case LOGIN_FAIL:
    case SIGNUP_FAIL:
        return{
            ...state,
            token: null,
            isAuthenticated: false,
            loading: false
        }
    default:
        return state
  }
}
