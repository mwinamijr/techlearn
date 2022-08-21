import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    userLoginReducer, userRegisterReducer, userListReducer, userDeleteReducer
} from './redux/reducers/userReducers'

import {
    notesListReducer
} from './redux/reducers/notesReducers'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,

    notesList: notesListReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const notesListFromStorage = localStorage.getItem('notesLst') ?
    JSON.parse(localStorage.getItem('notesLst')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
    notesList: { notes: notesListFromStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware),
    ))

export default store