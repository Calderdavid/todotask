import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        uid: null,
        email: null,
        displayName: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, {payload}) => {
            // state.status = 'authenticated'
            // state.uid = payload.uid;
            // state.email = payload.email;
            // state.displayName = payload.displayName;
            // state.errorMessage = null;
        },
        checkingCredentials: (state) => {
            state.status = 'checking'
        }

    }
})

export const {login, checkingCredentials} = authSlice.actions;