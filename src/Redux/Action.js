import { CREATE_PRODUCT, REMOVE_PRODUCT } from "./Constants";


export const addProducts = (result) => async (dispatch, getState) => {
console.log(result);
    dispatch({
        type: CREATE_PRODUCT,
        payload: result,
    });

    localStorage.setItem("AllProducts", JSON.stringify(getState().products.AllProducts));
};

// REMOVE FROM CART
export const removeProducts = (id) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_PRODUCT,
        payload: id,
    });

    localStorage.setItem("AllProducts", JSON.stringify(getState().products.AllProducts));
};