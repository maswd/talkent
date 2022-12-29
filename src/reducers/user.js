export const userReducer = (state = {}, action) => {

    switch (action.type) {
        case "SET_USER":
            return { ...action.payload }
        case "DETAILS_USER":
            return { ...action.payload }
        case "UPDATE_USER":
            return { ...action.payload }
        default:
            return state;
    }
}
export const usersReducer = (state = [], action) => {

    switch (action.type) {
        case "INIT_USERS":
            return [...action.payload]
        case "DELETE_USERS":
            return [...action.payload]
        case "UPDATE_USER_ROLE":
            return [...action.payload]
        default:
            return state;
    }
}