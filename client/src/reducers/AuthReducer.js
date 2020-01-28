import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCES,
    LOGIN_FAIL,
    CLEAR_ERROR,
    LOGOUT,
    USER_LOADED,
    AUTH_ERROR
}
    from './../actions/actiontypes'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    error: null
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCES:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case REGISTER_FAIL:
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user : null,
                error: action.payload
            }


        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}



export default AuthReducer;