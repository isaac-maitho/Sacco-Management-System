import { createStore, combineReducers, applyMiddleware } from 'redux'
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

})


const shoppingItemsFromStorage = localStorage.getItem('shoppingItems')
    ? JSON.parse(localStorage.getItem('shoppingItems'))
    : []

const basketItemsFromStorage = localStorage.getItem('basketItems')
    ? JSON.parse(localStorage.getItem('basketItems'))
    : []

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}



const middleware = [thunk]



const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)




export default store