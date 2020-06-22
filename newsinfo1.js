import React from 'react';
import { Text, View, FlatList, ActivityIndicator, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from '../css/styles.js';
import Imgbar from '../components/imagebar.js';
import { material , sanFranciscoWeights , iOSUIKit  , systemWeights , human} from 'react-native-typography';
import ScrollUp from 'react-native-scroll-up';
import { APIKEY } from '../Apikey/Apikey.js';


export default class Newsinfo extends React.Component {
    static navigationOptions = {
        headerTitle: () =><Imgbar/>,
        headerTitleAlign: 'center',
    }

    constructor(props) {
        super(props);

        this.state = {
          data: [],
          isLoading: true,
        };

      }

      

    componentDidMount () {
        fetch('http://newsapi.org/v2/top-headlines?country=ph&category=health&apiKey=' + APIKEY )
        .then((response) => response.json())
        .then((json) => {
          this.setState({ 
            data: json.articles,
          });
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }


    render() {
        state = {
            visible: false,
          };    
          handleOnScroll = event => {
            const offsetY = event.nativeEvent.contentOffset.y;     
            if (offsetY > 50) {
              this.setState({
                visible: true,
              });
            } else {
              this.setState({
                visible: false,
              });
            }
          };
          
        const { isLoading, data } = this.state;
        return (
            <View style={[styles.containercustom]}>
            {isLoading ? <ActivityIndicator size="large" color="#888888" 
            style={{ flex: 1, justifyContent: "center", justifyContent: "center"}}/> 
            : (
                <React.Fragment>
                    <ScrollView

                    ref={scrollview => {this.scrollview = scrollview }}
                    onScroll={event => handleOnScroll(event)}>
                        <Text style={[ iOSUIKit.largeTitleEmphasized , styles.defaulttext , styles.borderbottom]}>News</Text>
                    {data.map((item, index) => (
                        <TouchableOpacity 
                            style={styles.listshape}
                            onPress={() => {
                              this.props.navigation.navigate('Newsinfo', {
                                Source:item.source.name,
                                Title:item.title,
                                Description:item.description,
                                Newsimage:item.urlToImage,
                                Url:item.url,
                                Published:item.publishedAt,
                                Newscontent:item.content,
                              });
                            }}
                            >
                            
                            <Text style={[styles.row]}>
                            <Text style={[iOSUIKit.subheadEmphasized , styles.subhead]} >{item.source.name}</Text>{"\n"}
                            <Text style={[iOSUIKit.title3Emphasized , styles.defaultext]}>{item.title}</Text>{"\n"}
                            <Text style={[iOSUIKit.subheadEmphasized , styles.subhead]} >{item.description}</Text>
                            
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <ScrollUp
                refView="ScrollView"
                root={this.scrollview}
                visible={this.state.visible}
                type="image"
                />
            </React.Fragment>
          
              )}
            </View>
            
           
          );

    }
}


