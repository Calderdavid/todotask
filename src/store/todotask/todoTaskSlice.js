import {createSlice} from '@reduxjs/toolkit'

export const todoTaskSlice = createSlice({
    name: 'todotask',
    initialState: {
        description: 'Task',
        category: 'groceries'
    },
    reducers: {
        addTask: (state, {payload}) => {
            state.description = payload.description
            state.category = payload.category
        }
    }
})

export const {addTask} = todoTaskSlice.actions;