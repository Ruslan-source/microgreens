
import {combineReducers} from "redux";
import {cartReducers as cart} from "./Cart/reducers";
import {productsReducers as products} from "./getProducts/reducers";
import {authReducers as auth} from "./Auth";



export const reducers = combineReducers({
    cart,
    products,
    auth
})