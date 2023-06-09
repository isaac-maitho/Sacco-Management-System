import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


const reducer = combineReducers({
  

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
    
}



const middleware = [thunk]



const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)




export default store