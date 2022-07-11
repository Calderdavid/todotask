//Son acciones que pueden hacer dispatch pero tienen tareas asincronas

import { checkingCredentials } from "./authSlice"

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials())

    }
}

