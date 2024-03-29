import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    userLoginReducer, userRegisterReducer, userListReducer, 
    userDeleteReducer, userUpdateReducer, userDetailsReducer
} from './redux/reducers/userReducers'

import {
    notesListReducer, noteDetailsReducer, conceptsListReducer, conceptDetailsReducer,
} from './redux/reducers/notesReducers'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,

    notesList: notesListReducer,
    noteDetails: noteDetailsReducer,
    conceptsList: conceptsListReducer,
    conceptDetails: conceptDetailsReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const notesListFromStorage = localStorage.getItem('notesLst') ?
    JSON.parse(localStorage.getItem('notesLst')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware),
    ))

export default store