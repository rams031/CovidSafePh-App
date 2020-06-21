import React from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Image,  
  TouchableOpacity, 
  SafeAreaView,
  ScrollView
} from 'react-native';
import styles from '../css/styles.js';
import { material , sanFranciscoWeights , iOSUIKit  , systemWeights ,human } from 'react-native-typography';
import { LinearGradient } from 'expo-linear-gradient';
import Imgbar from '../components/imagebar.js';
import Categorydesign from './Homedesign.js'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      headerTitle: () => <Imgbar/>,
      headerTitleAlign: 'center',

    }  
    render() {
      return (
        <View style={styles.container}> 
          <ScrollView>
            <View style={styles.box}>

              <Categorydesign link={() => this.props.navigation.navigate('HomeInfo4')} icon={require('../components/stopsign.png')}
              subtitle="Stay Home"  title="Save Lives" />

              <Categorydesign link={() => this.props.navigation.navigate('HomeInfo')} icon={require('../components/coronavirus.png')}
              subtitle="What is"  title="COVID-19" />

              <Categorydesign link={() => this.props.navigation.navigate('HomeInfo2')} icon={require('../components/cough.png')}
              subtitle="Coronavirus"  title="Symptoms" />

              <Categorydesign link={() => this.props.navigation.navigate('HomeInfo3')} icon={require('../components/prevention.png')}
              subtitle="Coronavirus Viral Spread"  title="Prevention" />

              <Categorydesign link={() => this.props.navigation.navigate('HomeInfo5')} icon={require('../components/hotline.png')}
              subtitle="Coronavirus Help"  title="Hotline PH" /> 

            </View> 
          </ScrollView>
        </View> 
      );
    }
}


  