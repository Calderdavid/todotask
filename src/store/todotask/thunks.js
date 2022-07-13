import { addTask } from "./todoTaskSlice";

export const addNewTask = ({description, category}) => {
    return async(dispatch) => {
        dispatch(addTask({description, category}))
    }
}