import {configureStore} from '@reduxjs/toolkit'
import {authSlice} from './auth/authSlice'
import { todoTaskSlice } from './todotask/todoTaskSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        todotask: todoTaskSlice.reducer
    }
})