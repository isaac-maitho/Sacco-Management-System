import {
    CREATE_SAVINGS_FAIL,
    CREATE_SAVINGS_REQUEST,
    CREATE_SAVINGS_RESET,
    CREATE_SAVINGS_SUCCESS,
    DELETE_SAVINGS_FAIL,
    DELETE_SAVINGS_REQUEST,
    DELETE_SAVINGS_SUCCESS,
    DETAILS_SAVINGS_FAIL,
    DETAILS_SAVINGS_REQUEST,
    DETAILS_SAVINGS_SUCCESS,
    LIST_SAVINGS_FAIL,
    LIST_SAVINGS_REQUEST,
    LIST_SAVINGS_RESET,
    LIST_SAVINGS_SUCCESS,
    UPDATE_SAVINGS_FAIL,
    UPDATE_SAVINGS_REQUEST, UPDATE_SAVINGS_RESET,
    UPDATE_SAVINGS_SUCCESS
} from '../constants/savingsConstants'




export const savingsCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_SAVINGS_REQUEST:
            return { loading: true }
        case CREATE_SAVINGS_SUCCESS:
            return { loading: false, success: true, savings: action.payload }
        case CREATE_SAVINGS_FAIL:
            return { loading: false, error: action.payload }
        case CREATE_SAVINGS_RESET:
            return {}
        default:
            return state
    }
}


export const savingsListReducer = (state = { savings: [] }, action) => {
    switch (action.type) {
        case LIST_SAVINGS_REQUEST:
            return {
                loading: true,
            }
        case LIST_SAVINGS_SUCCESS:
            return {
                loading: false,
                savings: action.payload,
            }
        case LIST_SAVINGS_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case LIST_SAVINGS_RESET:
            return { savings: [] }
        default:
            return state
    }
}


export const savingsDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_SAVINGS_REQUEST:
            return { loading: true }
        case DELETE_SAVINGS_SUCCESS:
            return { loading: false, success: true }
        case DELETE_SAVINGS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const savingsUpdateReducer = (state = { savings: {} }, action) => {

    switch (action.type) {
        case UPDATE_SAVINGS_REQUEST:
            return { loading: true }
        case UPDATE_SAVINGS_SUCCESS:
            return { loading: false, success: true, savings: action.payload }
        case UPDATE_SAVINGS_FAIL:
            return { loading: false, error: action.payload }
        case UPDATE_SAVINGS_RESET:
            return { savings: {} }
        default:
            return state
    }
}


export const savingsDetailsReducer = (
    state = { savings: {} },
    action
) => {
    switch (action.type) {
        case DETAILS_SAVINGS_REQUEST:
            return { ...state, loading: true }
        case DETAILS_SAVINGS_SUCCESS:
            return { loading: false, savings: action.payload }
        case DETAILS_SAVINGS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}