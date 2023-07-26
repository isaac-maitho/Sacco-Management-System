import { legacy_createStore as createStore, combineReducers, applyMiddleware, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    usersDetailsReducer,
    usersRegisterReducer,
    usersUpdateProfileReducer
} from './reducers/userReducers'

import {
    memberListReducer,
    memberCreateReducer,
    memberDeleteReducer,
    memberUpdateReducer,
    memberDetailsReducer,
} from './reducers/memberReducers'


const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    usersUpdate: usersUpdateProfileReducer,
    usersCreate: usersRegisterReducer,
    usersDetails: usersDetailsReducer,
    memberList: memberListReducer,
    memberCreate: memberCreateReducer,
    memberUpdate: memberUpdateReducer,
    memberDelete: memberDeleteReducer,
    memberDetails: memberDetailsReducer

})


const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}



const middleware = [thunk]



const store = legacy_createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)





export default store