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
import NumberFormat from 'react-number-format';

export default class Casedesign extends React.Component {
    render() {
      return (
        <View>
            <Text>
                <Text style={[iOSUIKit.subheadEmphasized, styles.subhead]}>{this.props.location}</Text>{"\n"}
                <NumberFormat renderText={text => <Text style={[iOSUIKit.largeTitleEmphasized , styles.defaultext ]}>{text}</Text>} 
                value={this.props.cases} displayType={'text'} thousandSeparator={true} />
                <Text style={[iOSUIKit.largeTitleEmphasized , styles.defaultext ]}> cases</Text>
            </Text> 
            <View style={styles.customrow}>

            <Text style={[iOSUIKit.subheadEmphasized, styles.subhead , styles.defaultext]} > 
                <Text style={styles.redtext}>Total Death: </Text> 
                <NumberFormat renderText={text => <Text>{text}</Text>} 
                    value={this.props.death} displayType={'text'} thousandSeparator={true} />
                <Text style={styles.greentext}>  Total Recovered: </Text>    
                <NumberFormat renderText={text => <Text >{text}</Text>} 
                    value={this.props.recover} displayType={'text'} thousandSeparator={true} />
                </Text>
            </View> 
        </View>  
      );
    }
}