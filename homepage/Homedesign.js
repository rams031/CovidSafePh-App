import React from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Image,  
  TouchableOpacity, 
  SafeAreaView,
  ScrollView,
} from 'react-native';
import styles from '../css/styles.js'
import { material , sanFranciscoWeights , iOSUIKit  , systemWeights ,human } from 'react-native-typography'

export default class Categorydesign extends React.Component {
    render() {
      return (
            <TouchableOpacity style={styles.recshape} onPress={this.props.link}> 

                <Image resizeMode="contain"
                source={this.props.icon}
                style={styles.iconhome}
                />
                 <Text style={[ styles.row]}>
                <Text style={[iOSUIKit.subheadEmphasized , styles.subhead]} >{this.props.subtitle}</Text>{"\n"}
                <Text style={[iOSUIKit.largeTitleEmphasized , styles.defaultext]}>{this.props.title}</Text>
                </Text>

            </TouchableOpacity>    
      );
    }
}