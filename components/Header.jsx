import React from 'react';
import styled from "styled-components/native";

export const Header = () =>{
    return (<HeaderS>
            <HeaderText>Aphorism</HeaderText>
        </HeaderS>)
}

const HeaderS = styled.View`
    height:6%;
    width:100%;
    padding:10px;
    background-color:white;
    margin-top:30px;
`;

const HeaderText = styled.Text`
    font-size:20px;
  
`;
