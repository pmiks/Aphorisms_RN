import {combineReducers
       ,createStore,applyMiddleware} from "redux";
import thunkMiddleware               from 'redux-thunk';
import {reducerAphorism}             from './reducerAphorism';


let rootReducer=combineReducers(
    {
     Aphorism:reducerAphorism
    }
  );


type TypeReducer = typeof rootReducer
export type AppStateType=ReturnType<TypeReducer>

let Store=createStore(rootReducer,applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store=Store;

export default Store;
