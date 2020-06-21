import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';



export default class Imgbar extends React.Component {
    render() {
      return (
        <View>
         <Image resizeMode="contain" source={require('./logo.png')}
        style={{width:150, height: 200 , alignItems:'center' , marginTop: '10%'}} 
           />
      </View>
      );
    }
}

