import {
    CREATE_LOAN_FAIL,
    CREATE_LOAN_REQUEST,
    CREATE_LOAN_RESET,
    CREATE_LOAN_SUCCESS,
    DELETE_LOAN_FAIL,
    DELETE_LOAN_REQUEST,
    DELETE_LOAN_SUCCESS,
    DETAILS_LOAN_FAIL,
    DETAILS_LOAN_REQUEST,
    DETAILS_LOAN_SUCCESS,
    LIST_LOAN_FAIL,
    LIST_LOAN_REQUEST,
    LIST_LOAN_RESET,
    LIST_LOAN_SUCCESS,
    UPDATE_LOAN_FAIL,
    UPDATE_LOAN_REQUEST, UPDATE_LOAN_RESET,
    UPDATE_LOAN_SUCCESS
} from '../constants/loanConstants'




export const loanCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_LOAN_REQUEST:
            return { loading: true }
        case CREATE_LOAN_SUCCESS:
            return { loading: false, success: true, loan: action.payload }
        case CREATE_LOAN_FAIL:
            return { loading: false, error: action.payload }
        case CREATE_LOAN_RESET:
            return {}
        default:
            return state
    }
}


export const loanListReducer = (state = { loans: [] }, action) => {
    switch (action.type) {
        case LIST_LOAN_REQUEST:
            return {
                loading: true,
            }
        case LIST_LOAN_SUCCESS:
            return {
                loading: false,
                loans: action.payload,
            }
        case LIST_LOAN_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case LIST_LOAN_RESET:
            return { loans: [] }
        default:
            return state
    }
}


export const loanDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_LOAN_REQUEST:
            return { loading: true }
        case DELETE_LOAN_SUCCESS:
            return { loading: false, success: true }
        case DELETE_LOAN_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const loanUpdateReducer = (state = { loan: {} }, action) => {

    switch (action.type) {
        case UPDATE_LOAN_REQUEST:
            return { loading: true }
        case UPDATE_LOAN_SUCCESS:
            return { loading: false, success: true, loan: action.payload }
        case UPDATE_LOAN_FAIL:
            return { loading: false, error: action.payload }
        case UPDATE_LOAN_RESET:
            return { loan: {} }
        default:
            return state
    }
}


export const loanDetailsReducer = (
    state = { loan: {} },
    action
) => {
    switch (action.type) {
        case DETAILS_LOAN_REQUEST:
            return { ...state, loading: true }
        case DETAILS_LOAN_SUCCESS:
            return { loading: false, loan: action.payload }
        case DETAILS_LOAN_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}