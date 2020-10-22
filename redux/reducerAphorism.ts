import {IAphorism, IAphorismState, IAphorismType, IQuestion} from "./interface";
import {initState} from "./init/initAphorism";
import {Dispatch} from "redux";
import {testAPI} from "../api/api";
//import {getTestsList_AC, toggleIsSynchroAC} from "./reducerTests";

const SET_APHORISM='SET_APHORISM';
type ATSetAphorism={type:typeof SET_APHORISM,data:IAphorism[]}
export const setAphorism_AC=(data:IAphorism[]):ATSetAphorism=>({type:SET_APHORISM,data:data});

const SET_APHORISM_TYPES='SET_APHORISM_TYPES';
type ATSetAphorismTypes={type:typeof SET_APHORISM_TYPES,data:IAphorismType[]}
export const setAphorismTypes_AC=(data:IAphorismType[]):ATSetAphorismTypes=>({type:SET_APHORISM_TYPES,data:data});

const SET_CONNECTED_STATUS='SET_CONNECTED_STATUS'
type ATSetConnectedStatus={type:typeof SET_CONNECTED_STATUS,status:boolean}
export const setConnectedStatus_AC=(status:boolean):ATSetConnectedStatus=>({type:SET_CONNECTED_STATUS,status:status});


type ATForReducerAphorism = ATSetAphorism|ATSetAphorismTypes|ATSetConnectedStatus;

export const getAphorism_TC=(col:number=1,category:string|null=null,notcategory:string|null=null,obscene:boolean|null=null)=>
    async (dispatch:Dispatch<ATForReducerAphorism>)=>
    {
//        window.alert("Ntcn");
//        dispatch(toggleIsSynchroAC(true));
        let response = await testAPI.getAphorism(null,true,col,category,notcategory,obscene)
        console.log(response.data)
        if (response.status===200) {
            dispatch(setAphorism_AC(response.data));
            dispatch(setConnectedStatus_AC(true))
        }
        else dispatch(setConnectedStatus_AC(false));
//        dispatch(toggleIsSynchroAC(false));
    }

export const getAphorismTypes_TC=()=>
    async (dispatch:Dispatch<ATForReducerAphorism>)=>
    {
        let response = await testAPI.getAphorismTypes()
        console.log(response.data)
        if (response.status===200)
        {
            dispatch(setAphorismTypes_AC(response.data))
            dispatch(setConnectedStatus_AC(true))
        }
        else dispatch(setConnectedStatus_AC(false));
    }



export const reducerAphorism=(state:IAphorismState=initState,action:ATForReducerAphorism):IAphorismState=> {
    switch (action.type) {
        case SET_CONNECTED_STATUS: return {...state,connected:action.status}
            break;
        case SET_APHORISM: return {...state,aphorism:action.data}
            break;
        case SET_APHORISM_TYPES: return {...state,aphorismType:action.data}
            break;
        default: return state
            break;
    }
}