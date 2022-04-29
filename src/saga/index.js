import {all} from 'redux-saga/effects'
import {fetchProductsWatcher} from "./GetProducts/saga";
import {authRegisterWatcher} from "./Auth/register.saga";
import {authLoginWatcher} from "./Auth/login.saga";


export function* rootWatcher() {
    yield all([fetchProductsWatcher(),authRegisterWatcher(),authLoginWatcher()])
}