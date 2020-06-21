import React from 'react';
import { Text, View, FlatList, ActivityIndicator, ScrollView, TouchableOpacity, Image, Dimensions, Linking } from 'react-native';
import styles from '../css/styles.js';
import Imgbar from '../components/imagebar.js';
import { material , sanFranciscoWeights , iOSUIKit  , systemWeights , human} from 'react-native-typography';


export default class Newsfullinfo extends React.Component {
    static navigationOptions = {
        headerTitle: () =><Imgbar/>,
        headerTitleAlign: 'center',
    }

    render() {
        const { navigation,
            screenWidth= Dimensions.get("window").width,
            rq = string => string.replace(/"(.+)"/g, "$1"),
            Source = JSON.stringify(navigation.getParam('Source')) ,
            Title = JSON.stringify(navigation.getParam('Title')),
            Description = JSON.stringify(navigation.getParam('Description')),
            Newsimage = JSON.stringify(navigation.getParam('Newsimage')),
            Url = JSON.stringify(navigation.getParam('Url')),
            Published = JSON.stringify(navigation.getParam('Published')),
            Newscontent = JSON.stringify(navigation.getParam('Newscontent')),
        } = this.props;

        return (
            <View style={[styles.containercustom]}>
                <ScrollView>

                    <Image
                    style={[styles.newsimage]}
                    source={{
                    uri:rq(Newsimage),
                    }}/>
                    
                    <Text style={[styles.newsrow]}>
                        {Source != 'null' ? <Text style={[iOSUIKit.subheadEmphasized , styles.subhead]} >{rq(Source)}{"\n"}</Text> : null } 
                        <Text style={[human.largeTitle]} >{rq(Title)}</Text>{"\n"}                                   
                        {Description != 'null' && Description == '' ?  <Text style={[iOSUIKit.title3 , styles.subhead]} >{rq(Description)}</Text> : null } {"\n"}
                        {Newscontent != 'null' ? <Text style={[iOSUIKit.title3 , styles.subhead]} >{rq(Newscontent)} {"\n"}</Text> : null } 
                    </Text>

                    <View style={[styles.linkcol]}>

                        <Text>
                            <Text  style={[iOSUIKit.title3 , styles.subhead]}>Source Url:</Text>
                        </Text> 

                        <TouchableOpacity style={styles.newsinfodesign}
                                            onPress={() => Linking.openURL(rq(Url))}>
                                        <Text style={[iOSUIKit.title3 , styles.subhead]} >{rq(Url)}</Text>
                        </TouchableOpacity>
                        
                    </View>
                </ScrollView>
            </View>
            
           
          );

    }
}

