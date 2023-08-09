import { logout } from './userActions'
import { API } from "../config";
import axios from "axios";
import {
    CREATE_SAVINGS_FAIL,
    CREATE_SAVINGS_REQUEST,
    CREATE_SAVINGS_SUCCESS,
    DELETE_SAVINGS_FAIL,
    DELETE_SAVINGS_REQUEST,
    DELETE_SAVINGS_SUCCESS,
    DETAILS_SAVINGS_FAIL,
    DETAILS_SAVINGS_REQUEST,
    DETAILS_SAVINGS_SUCCESS,
    LIST_SAVINGS_FAIL,
    LIST_SAVINGS_REQUEST,
    LIST_SAVINGS_SUCCESS,
    UPDATE_SAVINGS_FAIL,
    UPDATE_SAVINGS_REQUEST,
    UPDATE_SAVINGS_SUCCESS
} from '../constants/savingsConstants'





export const createSavings = (str) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_SAVINGS_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.post(`${API}/savings-create`, str, config)
        console.log(`oder`, str)

        dispatch({
            type: CREATE_SAVINGS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        console.log(error.response)
        console.log(error.response.data.error.message)
        const message = error.response.data.error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: CREATE_SAVINGS_FAIL,
            payload: message,
        })
    }
}


export const listSavings = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: LIST_SAVINGS_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.get(`${API}/savings-list`, config)

        dispatch({
            type: LIST_SAVINGS_SUCCESS,
            payload: data,
        })
        //console.log(data)
    } catch (error) {
        console.log(error)
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: LIST_SAVINGS_FAIL,
            payload: message,
        })
    }
}


export const deleteSavings = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_SAVINGS_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.delete(`${API}/savings-remove/${id}`, config)

        dispatch({ type: DELETE_SAVINGS_SUCCESS })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: DELETE_SAVINGS_FAIL,
            payload: message,
        })
    }
}


export const updateSavings = (str) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_SAVINGS_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        console.log(str)
        const { data } = await axios.put(
            `${API}/savings-update/${str._id}`,
            str,
            config
        )

        dispatch({
            type: UPDATE_SAVINGS_SUCCESS,
            payload: data,
        })
        dispatch({ type: DETAILS_SAVINGS_SUCCESS, payload: data })
    } catch (error) {
        console.log(error.response)
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: UPDATE_SAVINGS_FAIL,
            payload: message,
        })
    }
}


export const savingsDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: DETAILS_SAVINGS_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()


        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }


        const { data } = await axios.get(`${API}/savings-detail/${id}`, config)

        dispatch({
            type: DETAILS_SAVINGS_SUCCESS,
            payload: data,
        })
        console.log(data)
    } catch (error) {
        console.log(error)
        dispatch({
            type: DETAILS_SAVINGS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}