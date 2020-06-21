import React from 'react';
import { StyleSheet, Text, View , Image , ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { material , sanFranciscoWeights , iOSUIKit  , systemWeights , human} from 'react-native-typography'
import styles from '../css/styles.js'
import Imgbar from '../components/imagebar.js'



export default class covidhotline extends React.Component {
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
                        source={require('../components/hotline.png')}
                        style={styles.icon} 
                        />
                    <View style={styles.recshapetabs} >
                      <Text style={[iOSUIKit.largeTitleEmphasized , styles.defaulttext , styles.aligntexttabs]}>DOH COVID-19 HOTLINE</Text>

                        <Text style={[iOSUIKit.body, styles.marginbox , styles.maroon]}>
                        {"\n"}
                        Open to all Callers Nationwide 
                        </Text>

                        <Text style={[iOSUIKit.largeTitleEmphasized ]}>(02) 894-26843</Text>

                        <Text style={[iOSUIKit.body, styles.marginbox , styles.green]}>
                        {"\n"}
                        For (PLDT,SUN,SMART,TNT) Subscriber
                        </Text>


                        <Text style={[iOSUIKit.largeTitleEmphasized ]}>15555 </Text>

                      <Text style={[human.caption2 , styles.footnote]}>Source : https://www.pna.gov.ph/articles/1097002</Text>
                    </View>
                  </View> 

            </ScrollView>
        </View>
      
      );
    }
}
