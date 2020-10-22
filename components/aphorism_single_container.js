import {connect} from 'react-redux';
import {compose} from 'redux';
import {getAphorism_TC, getAphorismTypes_TC} from "../redux/reducerAphorism";
import {Aphorism} from "./aphorism_single";
import React from 'react'



 class AphorismS extends React.Component{
     constructor(props) {
         super(props);
     }
     componentDidMount() {
        this.props.getAphorism()
     }
     render(){
         return <Aphorism  {...this.props} />
     }

 }

let mapStateToProps=(state)=>{
    return{
        aphorism:state.Aphorism.aphorism,
        connection:state.connected
    }
}


export default compose(
    connect (mapStateToProps,{
        getAphorism:getAphorism_TC,
        getAphorismTypes:getAphorismTypes_TC
    })
)
(AphorismS);
