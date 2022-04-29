import {getProductsActionTypes} from "./actions";
import {rsf} from "../../firebase";

const initialState = {
    products: [],
    loading: true
}

 
export const productsReducers = (state = initialState, action) => {
    switch (action.type){
        case getProductsActionTypes.GET_PRODUCTS:

            return  {...state,products: action.payload }
        default:
            return state
    }
}