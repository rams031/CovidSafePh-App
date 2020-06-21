import React from 'react';
import { StyleSheet, Text, View , Image , ScrollView } from 'react-native';

import { material , sanFranciscoWeights , iOSUIKit  , systemWeights , human} from 'react-native-typography'
import styles from '../css/styles.js'
import Imgbar from '../components/imagebar.js'



export default class covidprevention extends React.Component {
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
                          source={require('../components/prevention.png')}
                          style={styles.icon} 
                          />
                      <View style={styles.recshapetabs} >
                        <Text style={[iOSUIKit.largeTitleEmphasized  , styles.defaulttext ,styles.aligntexttabs]}>Symptoms of COVID-19</Text>
                        <Text style={[iOSUIKit.body,styles.marginbox]}>
                        To prevent the spread of COVID-19:
                          <Text style={[material.subheading]}>
                              {"\n"}
                              1. Clean your hands often. Use soap and water, or an alcohol-based hand rub.
                              {"\n"}
                              2. Maintain a safe distance from anyone who is coughing or sneezing.
                              {"\n"}
                              3. Don’t touch your eyes, nose or mouth.
                              {"\n"}
                              4. Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.
                              {"\n"}
                              5. Stay home if you feel unwell.
                              {"\n"}
                              If you have a fever, cough and difficulty breathing, seek medical attention. Call in advance.
                              Follow the directions of your local health authority.
                              </Text>

                              </Text>
                        <Text style={[human.caption2 , styles.footnote]}>Source:https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public</Text>
                      </View>
                    </View> 

              </ScrollView>     
            </View>
      );
    }
}
