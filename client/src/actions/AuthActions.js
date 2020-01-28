import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCES,
    LOGIN_FAIL,
    AUTH_ERROR,
    CLEAR_ERROR,
    LOGOUT,
    USER_LOADED
}
    from './actiontypes'

import axios from 'axios'
import setAuthToken from '../utils/SetAuthToken'


//LOAD USER

export const loadUser = () => dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)


        axios.get('/api/auth')
            .then(res => dispatch({
                type: USER_LOADED,
                payload: res.data
            })).catch(() => dispatch({
                type: AUTH_ERROR
            }))
    }
}



//REGISTER USER

export const register = formData => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.post('/api/users/register', formData, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data

        }, dispatch(loadUser()))


        ).catch(err => dispatch({
            type: REGISTER_FAIL,
            payload: err.response.data.msg
        }))
}

//LOGIN USER
export const login = formData => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.post('/api/auth', formData, config)
        .then(res => dispatch({
            type: LOGIN_SUCCES,
            payload: res.data

        }, dispatch(loadUser()))


        ).catch(err => dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.msg
        }))
}




// CLEAR ERRORS
export const clearError = () => dispatch => {
    dispatch({
        type: CLEAR_ERROR
    })
}


//LOGOUT USER

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}

