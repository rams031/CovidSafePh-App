import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './homepage/homepage.js';

//home navigation
import covidinfo from './homepage/Homeinfo1.js';
import covidsymptoms from './homepage/Homeinfo2.js';
import covidprevention from './homepage/Homeinfo3.js';
import covidreminder from './homepage/Homeinfo4.js';
import covidhotline from './homepage/Homeinfo5.js';
//end 

//cases navigation
import SettingsScreen from './casespage/cases.js';
import caseinfo from './casespage/caseinfo1.js';
import caseinfoworldwide from './casespage/caseinfo2.js';
//end 

//news navigation
import Newsinfo from './newspage/newsinfo1.js';
import Newsfullinfo from './newspage/newsinfo2.js';
//end 
console.disableYellowBox = true;



const Homescreenhub = createStackNavigator(

  {
    Home: {screen: HomeScreen},
    HomeInfo: {screen: covidinfo},
    HomeInfo2: {screen: covidsymptoms},
    HomeInfo3: {screen: covidprevention},
    HomeInfo4: {screen: covidreminder},
    HomeInfo5: {screen: covidhotline}
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0, 
        borderBottomWidth: 0, 
      },
  },
});

const Settingshub = createStackNavigator(
  {
    Home: {screen: SettingsScreen},
    Case: {screen: caseinfo},
    Worldwidecase: {screen: caseinfoworldwide}
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0, 
        borderBottomWidth: 0, 
      },
  }
});

const Newshub = createStackNavigator(

  {
    Home: {screen: Newsinfo},
    Newsinfo: {screen: Newsfullinfo}
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0, 
        borderBottomWidth: 0, 
      },
  },
});

const Tabnavigation = createMaterialBottomTabNavigator(
  {
    Home:{ 
      screen: Homescreenhub,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="inbox" size={25} color={ tintColor } />
        )
      },

      
    },
    Cases: {
      screen: Settingshub,

      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="area-chart" size={25} color={ tintColor } />
        )
      }
    },
    News: {
      screen: Newshub,

      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="newspaper-o" size={25} color={ tintColor } />
        )
      }
    }

  },
  {
    activeColor: '#B75A5A',
    inactiveColor: 'gray',
    barStyle: { backgroundColor: 'white' },
    elevation: 0, 
    shadowOpacity: 0, 
    borderTopWidth: 0
  }
)




export default createAppContainer(Tabnavigation) ;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
