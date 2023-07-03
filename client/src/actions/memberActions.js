
import {
    MEMBER_CREATE_REQUEST,
    MEMBER_CREATE_FAIL,
    MEMBER_CREATE_SUCCESS,
    LIST_MEMBER_FAIL,
    LIST_MEMBER_REQUEST,
    LIST_MEMBER_SUCCESS,
    MEMBER_DELETE_FAIL,
    MEMBER_DELETE_SUCCESS,
    MEMBER_DELETE_REQUEST,
    MEMBER_DETAILS_FAIL,
    MEMBER_DETAILS_SUCCESS,
    MEMBER_DETAILS_REQUEST,
    MEMBER_UPDATE_REQUEST,
    MEMBER_UPDATE_SUCCESS,
    MEMBER_UPDATE_FAIL

} from '../constants/memberConstants'

import { logout } from './userActions'
import { API } from "../config";
import axios from "axios";



export const createMember = (cust) => async (dispatch, getState) => {
    try {
        dispatch({
            type: MEMBER_CREATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.post(`${API}/customer-create`, cust, config)

        dispatch({
            type: MEMBER_CREATE_SUCCESS,
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
            type: MEMBER_CREATE_FAIL,
            payload: message,
        })
    }
}


export const listMembers = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: LIST_MEMBER_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.get(`${API}/member-list`, config)

        dispatch({
            type: LIST_MEMBER_SUCCESS,
            payload: data,
        })
        console.log(data)
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
            type: LIST_MEMBER_FAIL,
            payload: message,
        })
    }
}


export const deleteMember = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: MEMBER_DELETE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.delete(`${API}/customer-remove/${id}`, config)

        dispatch({ type: MEMBER_DELETE_SUCCESS })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: MEMBER_DELETE_FAIL,
            payload: message,
        })
    }
}


export const updateMember = (cust) => async (dispatch, getState) => {
    try {
        dispatch({
            type: MEMBER_UPDATE_REQUEST,
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

        console.log(cust)
        const { data } = await axios.put(
            `${API}/customer-update/${cust._id}`,
            cust,
            config
        )

        dispatch({
            type: MEMBER_UPDATE_SUCCESS,
            payload: data,
        })
        dispatch({ type: MEMBER_DETAILS_SUCCESS, payload: data })
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
            type: MEMBER_UPDATE_FAIL,
            payload: message,
        })
    }
}


export const memberDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: MEMBER_DETAILS_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()


        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }


        const { data } = await axios.get(`${API}/customer-detail/${id}`, config)

        dispatch({
            type: MEMBER_DETAILS_SUCCESS,
            payload: data,
        })
        console.log(data)
    } catch (error) {
        console.log(error)
        dispatch({
            type: MEMBER_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}