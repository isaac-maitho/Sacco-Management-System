import { logout } from './userActions'
import { API } from "../config";
import axios from "axios";
import {
    CREATE_LOAN_FAIL,
    CREATE_LOAN_REQUEST,
    CREATE_LOAN_SUCCESS,
    DELETE_LOAN_FAIL,
    DELETE_LOAN_REQUEST,
    DELETE_LOAN_SUCCESS,
    DETAILS_LOAN_FAIL,
    DETAILS_LOAN_REQUEST,
    DETAILS_LOAN_SUCCESS,
    LIST_LOAN_FAIL,
    LIST_LOAN_REQUEST,
    LIST_LOAN_SUCCESS,
    UPDATE_LOAN_FAIL,
    UPDATE_LOAN_REQUEST,
    UPDATE_LOAN_SUCCESS
} from '../constants/loanConstants'





export const createLoan = (str) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_LOAN_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.post(`${API}/loan-create`, str, config)
        console.log(`loan`, str)

        dispatch({
            type: CREATE_LOAN_SUCCESS,
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
            type: CREATE_LOAN_FAIL,
            payload: message,
        })
    }
}


export const listLoan = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: LIST_LOAN_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.get(`${API}/loan-list`, config)

        dispatch({
            type: LIST_LOAN_SUCCESS,
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
            type: LIST_LOAN_FAIL,
            payload: message,
        })
    }
}


export const deleteLoan = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_LOAN_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.delete(`${API}/order-remove/${id}`, config)

        dispatch({ type: DELETE_LOAN_SUCCESS })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: DELETE_LOAN_FAIL,
            payload: message,
        })
    }
}


export const updateLoan = (str) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_LOAN_REQUEST,
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
            `${API}/loan-update/${str._id}`,
            str,
            config
        )

        dispatch({
            type: UPDATE_LOAN_SUCCESS,
            payload: data,
        })
        dispatch({ type: DETAILS_LOAN_SUCCESS, payload: data })
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
            type: UPDATE_LOAN_FAIL,
            payload: message,
        })
    }
}


export const loanDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: DETAILS_LOAN_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()


        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }


        const { data } = await axios.get(`${API}/loan-detail/${id}`, config)

        dispatch({
            type: DETAILS_LOAN_SUCCESS,
            payload: data,
        })
        console.log(data)
    } catch (error) {
        console.log(error)
        dispatch({
            type: DETAILS_LOAN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}