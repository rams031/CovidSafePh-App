import React from 'react';
import { ActivityIndicator, StyleSheet, Text,  View, FlatList , SafeAreaView , ScrollView , Image, TouchableOpacity } from 'react-native';
import { material , sanFranciscoWeights , iOSUIKit  , systemWeights , human} from 'react-native-typography'
import { SearchBar } from 'react-native-elements';
import NumberFormat from 'react-number-format';
import styles from '../css/styles.js'
import Imgbar from '../components/imagebar.js'
import Casedesign from './casedesign.js'

export default class SettingsScreen extends React.Component {
      static navigationOptions = {
        headerTitle: () => <Imgbar/>,
        headerTitleAlign: 'center',
      } 

      constructor(props) {
        super(props);

        this.state = {
          data: [],
          data1: [],
          isLoading: true,
          searchText: "",
          filteredData: [],
        };

      }

    componentDidMount () {
      fetch('https://api.covid19api.com/summary')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ 
          data: json.Global,
          data1: json.Countries
        });


      })
      
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
    }

    search = (searchText) => {
      this.setState({searchText: searchText});
    
      let filteredData = this.state.data1.filter(function (item) {
        return item.Country
        .includes(searchText);
      });
    
      this.setState({filteredData: filteredData});
    };



    render() {
      const { data, data1,  isLoading, searchText, filteredData } = this.state;
      let num = parseFloat(data.TotalConfirmed);
      let death = parseFloat(data.TotalDeaths);
      let recover = parseFloat(data.TotalRecovered);

      

      

      return (
      <View style={[styles.containercustom]}>
        {isLoading ? <ActivityIndicator size="large" color="#888888" style={{ flex: 1 , 
        justifyContent: "center", justifyContent: "center"}}/> 
        : (
          <View style={[styles.col]}>
            <Text style={[ iOSUIKit.largeTitleEmphasized , styles.defaulttext , styles.borderbottom]}>
                Total Cases 
            </Text>

            <TouchableOpacity style={styles.recshapecustom} onPress={() => {
               this.props.navigation.navigate('Worldwidecase', {
                 Country:"Worldwide",
                 NewConfirmed:data.NewConfirmed,
                 TotalConfirmed:data.TotalConfirmed,
                 NewDeaths:data.NewDeaths,
                 TotalDeaths:data.TotalDeaths,
                 NewRecovered:data.NewRecovered,
                 TotalRecovered:data.TotalRecovered,
                 updatedates:data.Date
               });
             }}>
              
                <Casedesign location="Worldwide Infection" cases={num} death={death} recover={recover} />
            </TouchableOpacity>

            <Text style={[ iOSUIKit.largeTitleEmphasized , styles.defaulttext , styles.borderbottom]}>
                Countries
            </Text>

              
            <SearchBar
            inputStyle={{backgroundColor: 'white'}}
            containerStyle={styles.searchcontainer}
            placeholderTextColor={'#g5g5g5'}
            placeholder={'Search Keyword'}
            round={true}
            lightTheme={true} 
            inputContainerStyle={{backgroundColor: '#green'}}
            onChangeText={this.search}
            value={this.state.searchText}
            />

            <FlatList
              data={filteredData && filteredData.length > 0 ? filteredData : data1}
              
              renderItem={({item})=>(
                
              <View>

                  <TouchableOpacity style={styles.recshapecustom} onPress={() => {
                      this.props.navigation.navigate('Case', {


                        Country:item.Country,
                        CountryCode:item.CountryCode,
                        NewConfirmed:item.NewConfirmed,
                        TotalConfirmed:item.TotalConfirmed,
                        NewDeaths:item.NewDeaths,
                        TotalDeaths:item.TotalDeaths,
                        NewRecovered:item.NewRecovered,
                        TotalRecovered:item.TotalRecovered,
                        updatedates:item.Date
                      });
                    }}>

                    <Casedesign location={[item.Country , " " , "(" , item.CountryCode , ")"]} 
                    cases={item.TotalConfirmed} death={item.TotalDeaths} recover={item.TotalRecovered} /> 

                  </TouchableOpacity>
            
              </View>
              )}
            />
          </View>

        )}
    </View>
    );
  }
}