import React from 'react';
import styled from "styled-components/native";
import {Pressable, Text,FlatList, StyleSheet} from "react-native";

export const TypeAphorism = ({types,getAphorism}) =>{
    const onSelectCategory=(id)=>{
        if (id==1) getAphorism()
            else getAphorism(null,id)
    }
    const DATA=types.map((a,i)=>{return {id:'key'+a.id_type.toString,title:a.typename,key:a.id_type}})
    const renderI=({item})=>(<HeaderText key={item.id}><Pressable onPress={()=>{onSelectCategory(item.key)}}><Text>{item.title}</Text></Pressable></HeaderText>)
    //console.log(DATA)
    return (<GroupTypes>
        <FlatList horizontal={true} style={styles.scrollTypes} data={DATA} renderItem={renderI} keyExtractor={item=>item.id}/>
    </GroupTypes>)
}

const styles = StyleSheet.create({
    scrollTypes: {
//        flexDirection:'column',
//    marginTop:'20px',
//        backgroundColor: '#53b1d6',
//         alignItems: 'center',
//         justifyContent: 'center'
    },
});


const GroupTypes = styled.View`
    height:10%;
    width:100%;
    padding:2px;
    background-color:white;
    align-items:center;
    justify-content:center; 
    border: solid 1px black;   
`;

const HeaderText = styled.TouchableOpacity`
    font-size:25px;
    padding:10px;
    margin: 5px;
    border: solid 1px black;
    align-self:center;
    text-align:center;
`;
