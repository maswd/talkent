import { categories, deleteCategories, getCategories, updateCategories } from "../services/categoryService";
import { errorMessage, successMessage } from "../utils/message";

export const getAllCategories = () => {
    return async (dispatch, getState) => {
        try {
            const { data } = await categories();
            console.log(data);
            await dispatch({ type: "INIT", payload: data.details.data })
        } catch (error) {
            dispatch({ type: "INIT", payload: [...getState().category] });
        }
    }
}

export const addCategory = category => {
    return async (dispatch, getState) => {
        try {
            const { data: message } = await categories(category);
            const { data, status } = await categories()
            if (status === 200) {
                successMessage(message.details.message)
                await dispatch({ type: "SET_CATEGORY", payload: data.details.data.reverse() });
            }
        } catch (error) {
            errorMessage(error.response.status === 409 ? error.response.data.datails[0].message : error.response.data.details.message)
            await dispatch({ type: "INIT", payload: [...getState().category] });
        }
    }
}
export const deleteCategory = idCategory => {
    return async (dispatch, getState) => {
        try {
            const { data: message } = await deleteCategories(idCategory);
            const { data, status } = await categories()
            if (status === 200) successMessage(message.details.message)
            await dispatch({ type: "DELETE_CATEGORY", payload: data.details.data.reverse() });
        } catch (error) {
            errorMessage(error.response.data.details.message)
            await dispatch({ type: "INIT", payload: [...getState().category] });
        }
    }
}
export const editCategory = (category) => {
    return async (dispatch, getState) => {
        try {
            const { data: message } = await updateCategories(category);
            const { data, status } = await categories()
            if (status === 200) successMessage(message.details.message)
            await dispatch({ type: "UPDATE_CATEGORY", payload: data.details.data.reverse() });
        } catch (error) {
            errorMessage(error.response.data.details.message)
            await dispatch({ type: "INIT", payload: [...getState().category] });
        }
    }
}
