import React from 'react';
import { StyleSheet, Text, View , Image , ScrollView } from 'react-native';

import { material , sanFranciscoWeights , iOSUIKit  , systemWeights , human} from 'react-native-typography'
import styles from '../css/styles.js'
import Imgbar from '../components/imagebar.js'



export default class covidreminder extends React.Component {
    static navigationOptions = {
        headerTitle: () =><Imgbar/>,
        headerTitleAlign: 'center',
      }  
      
    render() {
      return (
        <View style={styles.container}> 
            <ScrollView>
                  <View style={styles.box}>
                  <Image resizeMode="contain"
                        source={require('../components/stopsign.png')}
                        style={styles.icon} 
                        />
                    <View style={styles.recshapetabs} >
                      <Text style={[iOSUIKit.largeTitleEmphasized , styles.defaulttext]}>STAY HOME </Text>
                      <Text style={[iOSUIKit.largeTitleEmphasized , styles.defaulttext ,styles.aligntexttabs]}>SAVE LIVES.</Text>
                      <Text style={[iOSUIKit.title3Emphasized, styles.marginbox , styles.gray]}>
                            {"\n"}
                             STAY home as much as you can
                            {"\n"}{"\n"}
                             KEEP a safe distance
                            {"\n"}{"\n"}
                             WASH hands often
                            {"\n"}{"\n"}
                             COVER your cough
                            {"\n"}{"\n"}
                             SICK? Call ahead
                            {"\n"}
                            </Text>
                      <Text style={[human.caption2 , styles.footnote]}>Source : https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public</Text>
                    </View>
                  </View> 

            </ScrollView>
        </View>
      
      );
    }
}
