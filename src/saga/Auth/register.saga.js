import {call, takeEvery,put} from "redux-saga/effects";
import '@firebase/firestore' // 👈 Don't forget this!
import 'firebase/auth'
import rsf from "../../constants/firebase";
import {authActions, authActionTypes} from "../../Redux/Auth";
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import { v4 as uuidv4 } from 'uuid'



function* createUserSaga(action) {
    console.log(action)
    try {
        const user = yield call(rsf.auth.createUserWithEmailAndPassword,action.email,action.password);
        yield put(authActions.setUser(user));
        const doc = yield call(
            rsf.firestore.addDocument,
            'usersInfo',
            {
                id: uuidv4(),
                email: action.email,
                password: action.password,
                phoneNumber: '',
                lvl: 0,
                street: '',
                home: '',
                flat: '',

            }
        );
    }
    catch(e) {
        console.log(e)
        console.log(action.password)
    }
}



export function* authRegisterWatcher() {
    yield takeEvery(authActionTypes.REGISTER_USER, createUserSaga )
}