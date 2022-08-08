import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: null,
    token: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { user } = action.payload
            state.user = user
        },
        logout: (state, action) => {
            state.user = null
        }
    },
})

//console.log(userSlice)
export const { setCredentials, logout } = userSlice.actions

export default authSlice.reducer

export const currentUser = (state) => state.auth.user