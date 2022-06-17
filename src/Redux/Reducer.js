import { CREATE_PRODUCT, REMOVE_PRODUCT } from "./Constants"



export const productReducers = (state = { AllProducts: [] }, action) => {
    switch (action.type) {
        case CREATE_PRODUCT:
            let item = action.payload
            console.log(item);
            for(let i=0;i<item.length;i++){
                return {
                    ...state,
                    AllProducts:[...state.AllProducts,item[i]]
                }
            }
            
        case REMOVE_PRODUCT:
                return {
                  ...state,
                  products: state.products.filter((i) => i.product !== action.payload),
                };

        default :
                return state;
    }
}