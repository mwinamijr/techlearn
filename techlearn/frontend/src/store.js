import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null


const store = configureStore({
    reducer: {
        auth: authReducer,
    }
})

export default store