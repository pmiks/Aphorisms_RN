import React from "react"
import {RefreshControl, Text, Pressable, View, Button, FlatList, StyleSheet} from 'react-native'
import styled from "styled-components/native";

import LikeImg from '../assets/Heart.png';

// const Avatar=({src,size})=>{
//     return <div> <img width={size} alt={"User Avatar"} src={src!=null?src:avatar_male}/> </div>
// }

// const image = { uri: "https://api.yes-t.net/public_html/images/question_-3721475_1881334771.jpg" };

const image = { uri: "https://pbs.twimg.com/ext_tw_video_thumb/1264123327301349377/pu/img/hzsOMDLCRpDUcjNk.jpg" };


const AphorismSingle=({item})=>{
    return( <Pressable>
            <Photo source={image}>
            <Aphor >
                <AporismText> {item.aphorism.text}</AporismText>
                <AporismAuthor > {item.aphorism.author}</AporismAuthor>
            </Aphor>
        </Photo>
        <Separator><FavoriteBtn source={LikeImg}/></Separator></Pressable>
    )
}


export const  Aphorism = ({aphorism,getAphorism,connection})=>{
//    console.log(aphorism.length)
//    console.log(aphorism)
    let DATA=(aphorism.length!=0)?aphorism.map((a,i)=>{return {id:'key'+i.toString,aphorism:a}}):[]
   // let DATA=aphorism.map((a,i)=>{return {id:'key'+i.toString,aphorism:a}})
    // const renderI=({item})=>(<HeaderText><Text>{item.title}</Text></HeaderText>)
    return (<View style={styles.container} >
            {connection?<>
            {/*<Button title={"Загрузить"} onPress={()=>{getAphorism(15)}}/>*/}
            <FlatList initialNumToRender={1} data={DATA} renderItem={AphorismSingle} keyExtractor={item=>item.id}/></>
          :<DisconnectText>Отсутствует соединение</DisconnectText>}</View>
        )
}


const styles = StyleSheet.create({
    container: {
//        flexDirection:'column',
//    marginTop:'20px',
//         backgroundColor: '#53b1d6',
         alignItems: 'center',
         justifyContent: 'center'
    },
});


const Aphor = styled.TouchableOpacity`
        background-color:transparent;
        align-items:center;
        justify-content:center;
        align-self:center;
        width:100%;
        aspect-ratio:1;         
`;


const Photo=styled.ImageBackground`
    aspect-ratio:1;
    opacity:1;
    border-radius:30px;
    align-items:center;
    justify-content:center;
`;

const FavoriteBtn=styled.Image`
    width:30px;
    height:30px;
    padding:0;
`;

const AporismText=styled.Text`
        text-align:center;
        align-self:center;
        align-items: center;
        font-size:26px;
        font-weight:bold;
        color:white;
        opacity:1;
`;

const DisconnectText=styled.Text`
        
        text-align:center;
        align-self:center;
        align-items: center;
        justify-content:center;
        font-size:26px;
        font-weight:bold;
        color:black;
        background-color:red;
        opacity:1;
`;


const Separator=styled.Text`
    height:50px;
    background-color:white;
    padding-left:10px;
`;


const AporismAuthor=styled.Text`
        alignSelf:flex-end;
        margin-end:20px;
        margin-top:20px;       
`;


