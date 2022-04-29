import {call, takeEvery,put} from "redux-saga/effects";
import '@firebase/firestore' // 👈 Don't forget this!
import 'firebase/auth'
import rsf from "../../constants/firebase";
import {authActions, authActionTypes} from "../../Redux/Auth";
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'


function* loginUserSaga(action) {
    console.log(action)
    try {
        const user = yield call(rsf.auth.signInWithEmailAndPassword,action.loginEmail,action.loginPassword);
        yield put(authActions.setUser(user));

    }
    catch(e) {
        console.log(e)
    }
}



export function* authLoginWatcher() {
    yield takeEvery(authActionTypes.LOGIN_USER, loginUserSaga )
}