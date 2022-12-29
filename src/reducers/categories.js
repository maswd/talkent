export const categoriesReducer = (state = [], action) => {

    switch (action.type) {
        case "INIT":
            return [...action.payload]
        case "SET_CATEGORY":
            return [...action.payload]
        case "DELETE_CATEGORY":
            return [...action.payload]
        case "CLEAR_CATEGORY":
            return [...action.payload]
        case "UPDATE_CATEGORY":
            return [...action.payload]
        default:
            return state;
    }
}