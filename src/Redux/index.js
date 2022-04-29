import {createStore} from "redux";
import {reducers} from "./reducers";
import {middlewares, sagaMiddleware} from "./middlewares";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../saga";





export const store = createStore(reducers,middlewares)

sagaMiddleware.run(rootWatcher)