import {
        MEMBER_CREATE_REQUEST, 
        MEMBER_CREATE_SUCCESS,
        MEMBER_CREATE_FAIL, 
        MEMBER_CREATE_RESET,
        LIST_MEMBER_REQUEST, 
        LIST_MEMBER_SUCCESS, 
        LIST_MEMBER_FAIL, 
        LIST_MEMBER_RESET, 
        MEMBER_DELETE_REQUEST, 
        MEMBER_DELETE_SUCCESS, 
        MEMBER_DELETE_FAIL, 
        MEMBER_UPDATE_REQUEST, 
        MEMBER_UPDATE_SUCCESS,
        MEMBER_UPDATE_FAIL, 
        MEMBER_UPDATE_RESET,
        MEMBER_DETAILS_REQUEST, 
        MEMBER_DETAILS_SUCCESS,
        MEMBER_DETAILS_FAIL 
} from '../constants/memberConstants'




export const memberCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case MEMBER_CREATE_REQUEST:
            return { loading: true }
        case MEMBER_CREATE_SUCCESS:
            return { loading: false, success: true, member: action.payload }
        case MEMBER_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case MEMBER_CREATE_RESET:
            return {}
        default:
            return state
    }
}


export const memberListReducer = (state = { members: [] }, action) => {
    switch (action.type) {
        case LIST_MEMBER_REQUEST:
            return {
                loading: true,
            }
        case LIST_MEMBER_SUCCESS:
            return {
                loading: false,
                members: action.payload,
            }
        case LIST_MEMBER_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case LIST_MEMBER_RESET:
            return { members: [] }
        default:
            return state
    }
}


export const memberDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case MEMBER_DELETE_REQUEST:
            return { loading: true }
        case MEMBER_DELETE_SUCCESS:
            return { loading: false, success: true }
        case MEMBER_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const memberUpdateReducer = (state = { member: {} }, action) => {

    switch (action.type) {
        case MEMBER_UPDATE_REQUEST:
            return { loading: true }
        case MEMBER_UPDATE_SUCCESS:
            return { loading: false, success: true, member: action.payload }
        case MEMBER_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case MEMBER_UPDATE_RESET:
            return { member: {} }
        default:
            return state
    }
}


export const memberDetailsReducer = ( state = { member: {} },action) => {
    switch (action.type) {
        case MEMBER_DETAILS_REQUEST:
            return { ...state, loading: true }
        case MEMBER_DETAILS_SUCCESS:
            return { loading: false, member: action.payload }
        case MEMBER_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}