import React from 'react';
import { StyleSheet, Text, View , Image , ScrollView , FlatList, Dimensions } from 'react-native';
import { material , sanFranciscoWeights , iOSUIKit  , systemWeights , human} from 'react-native-typography';
import styles from '../css/styles.js';
import Imgbar from '../components/imagebar.js';
import { PieChart } from "react-native-chart-kit";


export default class caseinfoworldwide extends React.Component {
    static navigationOptions = {
        headerTitle: () =><Imgbar/>,
        headerTitleAlign: 'center',
    }


    render() {

            const { navigation,
                rq = string => string.replace(/"(.+)"/g, "$1"),
                Country = JSON.stringify(navigation.getParam('Country')) ,
                NewConfirmed = JSON.stringify(navigation.getParam('NewConfirmed')),
                NewRecovered = JSON.stringify(navigation.getParam('NewRecovered')),
                NewDeaths = JSON.stringify(navigation.getParam('NewDeaths')),
                C = JSON.stringify(navigation.getParam('TotalConfirmed')),
                D =JSON.stringify(navigation.getParam('TotalDeaths')),
                R = JSON.stringify(navigation.getParam('TotalRecovered')),
                TotalDeaths = parseFloat(D),
                TotalRecovered = parseFloat(R),
                TotalConfirmed = parseFloat(C),
                screenWidth= Dimensions.get("window").width,
                chartConfig = {
                    backgroundGradientFrom: "#1E2923",
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientTo: "#08130D",
                    backgroundGradientToOpacity: 0.5,
                    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                    strokeWidth: 2,
                    barPercentage: 0.5,
                    useShadowColorFromDataset: false 
                },
                data1 = [
                    {
                    name: "Recovered",
                    population: TotalRecovered,
                    color: "#50C878",
                    legendFontColor: "#333333",
                    legendFontSize: 10
                    },
                    {
                    name: "Death",
                    population: TotalDeaths,
                    color: "#ff3b30",
                    legendFontColor: "#333333",
                    legendFontSize: 10
                    },
                    {
                    name: "Cases",
                    population: TotalConfirmed,
                    color: "#E5E2E2",
                    legendFontColor: "#333333",
                    legendFontSize: 10.5
                    },
                ]
            
            } = this.props;




      return (
            <View style={[styles.containercustom]}>
                <ScrollView>

                    <Text style={[iOSUIKit.largeTitleEmphasized , styles.defaultext , styles.textpadding ]} >
                        {rq(Country)}
                    </Text>

                    <PieChart
                        style={{padding:3}}
                        data={data1}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        accessor="population"
                        backgroundColor="transparent"
                        paddingLeft="15"
                        absolute
                    />


                    <View style={{height: 7, backgroundColor: '#f3f7fa', alignItems: 'stretch'}} />
                    <Text style={[iOSUIKit.largeTitleEmphasized , styles.defaultext , styles.textpadding ]}>{Country} Status</Text> 

                    <View style={[styles.rowdesc]}>

                        <View style={[styles.rowdesccol, styles.textpadding]}>        
                            <Text style={[human.headline ,styles.defaultext]} >New Confirmed Cases </Text>
                            <Text style={[iOSUIKit.largeTitleEmphasized ]} >{NewConfirmed} </Text>
                        </View>       

                        <View style={[styles.rowdesccol, styles.textpadding,  ]}>        
                            <Text style={[human.headline , styles.greentext]} > New Recovered Cases </Text>
                            <Text style={[iOSUIKit.largeTitleEmphasized , styles.textcenter]} >{NewRecovered} </Text>
                        </View>

                    </View>


                    <View style={[styles.rowdesc]}>

                        <View style={[styles.rowdesccol, styles.textpadding]}>        
                            <Text style={[human.headline ,styles.defaultext , styles.redtext]} >New Death Cases </Text>
                            <Text style={[iOSUIKit.largeTitleEmphasized ]} >{NewDeaths} </Text>
                        </View>       

                    </View>

                </ScrollView>
            </View>    
      );
    }
}
