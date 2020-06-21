import React from 'react';
import { StyleSheet, Text, View , Image, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { material , sanFranciscoWeights , iOSUIKit  , systemWeights , human} from 'react-native-typography'
import styles from '../css/styles.js'
import Imgbar from '../components/imagebar.js'



export default class covidinfo extends React.Component {
    static navigationOptions = {
      headerTitle: () =><Imgbar/>,
        headerTitleAlign: 'center',
    }  
      
    render() {
      return (
        <View style={styles.container}>
          <ScrollView >
                <View style={styles.box}>

                    <Image resizeMode="contain"
                      source={require('../components/coronavirus.png')}
                      style={styles.icon} 
                    />

                    <View style={styles.recshapetabs} >
                    <Text style={[ iOSUIKit.largeTitleEmphasized , styles.defaulttext ,styles.aligntexttabs
                    ]}>What is COVID-19?</Text>
                    <Text style={[iOSUIKit.body, styles.marginbox]}>
                    The coronavirus disease 2019 (COVID-19) is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2), a new strain of virus first detected in Wuhan, China in 2019. 
                    COVID-19 is known to target a person’s respiratory system. Infected patients may exhibit symptoms such as fever, cough, shortness of breath, and in some cases, muscle pain and sore throat. Some patients may also be asymptomatic.  
                    On March 11, 2020, the World Health Organization (WHO) has characterized COVID-19 as a pandemic due to the exponential increase of the number of cases in more than 100 countries.
                    On March 16, 2020. President Rodrigo Roa Duterte placed the entire Philippines under a State of Calamity amid the threats posed by COVID-19.
                    </Text>

                    <Text style={[human.caption2 , styles.footnote]}>Source: http://www.covid19.gov.ph/</Text>
                  </View>
                </View> 
        </ScrollView>
      </View>
      );
    }
}

