export const addUser = user => {
    return async dispatch => {
        await dispatch({ type: "SET_USER", payload: user });
    }
}
export const claerUser = () => {
    return async dispatch => {
        await dispatch({ type: "CLEAR_USER", payload: {} })
    }

}
export const updateUser = () => {
    return async dispatch => {
        await dispatch({ type: "CLEAR_USER", payload: {} })
    }

}