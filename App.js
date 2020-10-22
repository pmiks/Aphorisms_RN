import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AphorismSingle from "./components/aphorism_single_container";
import {Header} from "./components/Header";
import TypeAphorism from "./components/TypeAphorism_container";

import Store from "./redux/redux-store";
import {Provider} from "react-redux";
import {SafeAreaView} from "react-native-web";

export default function App() {
  return (
   <Provider store={Store}>

    <View style={styles.container}>
      <Header/>
      <TypeAphorism/>
      <AphorismSingle/>
      <StatusBar hidden={false} style="auto" />
    </View>

   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
//    flexDirection:'row',
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
