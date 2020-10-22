import {connect} from 'react-redux';
import {compose} from 'redux';
import {getAphorism_TC, getAphorismTypes_TC} from "../redux/reducerAphorism";
import {TypeAphorism} from "./TypeAphorism";
import React from 'react'



class TypeAphorismS extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getAphorismTypes()
    }
    render(){
        return <TypeAphorism types={this.props.aphorismType} {...this.props} />
    }

}

let mapStateToProps=(state)=>{
    return{
        aphorismType:state.Aphorism.aphorismType
    }
}


export default compose(
    connect (mapStateToProps,{
        getAphorismTypes:getAphorismTypes_TC,
        getAphorism:getAphorism_TC
    })
)
(TypeAphorismS);
