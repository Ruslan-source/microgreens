import {call, takeEvery,put} from "redux-saga/effects";
import {getProductsActions, getProductsActionTypes} from "../../Redux/getProducts/actions";
import rsf from "../../constants/firebase";



function* getCollection() {
    const snapshot = yield call(rsf.firestore.getCollection, 'products');
    const products = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))

    yield put(getProductsActions.getProducts(products));
}


export function* fetchProductsWatcher() {
    yield takeEvery(getProductsActionTypes.FETCH_PRODUCTS,getCollection )
}