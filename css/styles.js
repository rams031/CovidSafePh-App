
import { StyleSheet } from 'react-native';
import { material , sanFranciscoWeights , iOSUIKit  , systemWeights , human} from 'react-native-typography'
 

module.exports = StyleSheet.create({
    containercustom: {
      flex: 1,
      backgroundColor: '#fff',


    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    recshape:
    {
      justifyContent:'center',
      alignItems:'center',
      flexDirection: 'row' ,
      padding: 20,
      height: 'auto',
      width: 'auto',
      margin:7,
      borderBottomWidth: 0.5,
      borderColor: '#B6B5B5',
    },
    recshapecustom:
    {
      backgroundColor:'#fafafa',
      borderRadius: 10,
      padding: 10,
      height: 'auto',
      width: 'auto',
      margin:7,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.15,
      shadowRadius: 1.65,
      elevation: 3,


    },
    recshapetabs:
    {

      flexDirection: 'column' ,
      alignItems:'center',
      width: ' 90%',
      margin: 10,
      padding:0.5,

    },
    box:
    {
      flex:1,
      justifyContent: 'center',
      alignItems:'center',
    },
    icon:
    {
      position: 'relative',
      margin:10,
      width:100, 
      height: 100,
    },
    iconhome:
    {
      position: 'absolute',
      width:100, 
      height:70,
      right: 30,
    },
    row: 
    {
      flex:1,
      alignItems: 'center',
      flexDirection: 'row',

      

    },

    adjustment: 
    {
      flexDirection:'row', 
      padding:'1%',
      alignItems: 'center',
    },
    gradient: {
      flex: 1,
    },
    maroon:
    {
      color: '#4C4B4B',
      
    },
    defaultext:
    {
      color: '#3E3E3E',
    },
    gray:
    {
        color:'#4E4D4D',
    },
    marginbox:
    {
      margin:1,
      textAlign: 'center'
    },
    subhead:
    {
      color:'#888888'
    },
    aligntexttabs:
    {
      textAlign: 'center',
      margin:10,
    },
    borderbottom:
    {
      borderBottomWidth: 0.5,
      borderColor: '#B6B5B5',
      margin:5,

    },
    footnote:
    {
      textAlign:'center',
      color: '#894242',
    },
    alignment:
    {
      borderBottomWidth: 0.5,
      borderColor: '#B6B5B5',
    },
    searchcontainer: {
      backgroundColor: 'white',
      borderWidth: 0, 
      shadowColor: 'white', 
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent',
      borderRadius: 10,
    },
    searchbar: {
      width: "100%",
      borderWidth:0, 
      shadowColor: 'white', 
    },
    greentext:
    {
      color:'#44713D'
    },
    redtext:
    {
      color: '#B75A5A',

    },
    customrow: 
    {
      margin:3,
      flexDirection: 'row',
    },
    rowdesc: 
    {
      flex:1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',

      padding:10,
    },
    rowdescbackground:
    {
      backgroundColor: '#fafafa'
    },
    rowdesccol:
    {
      flex:1,
      flexDirection: 'column',
    },
    textpadding:
    {
      padding: 10
    },
    textcenter:
    {
      alignItems:'center',
      justifyContent: 'center',
    },
    listshape:
    {
      justifyContent:'center',

      flexDirection: 'row' ,
      padding: 15,
      height: 'auto',
      width: 'auto',
      borderBottomWidth: 0.5,
      borderColor: '#B6B5B5',
    },
    newsimage:
    {
      position: 'relative',
      width: null,
      resizeMode: 'contain',
      height: 220

    },
    newsrow: 
    {

      alignItems: 'center',
      flexDirection: 'row',
      margin:10
    },
    linkcol: 
    {

      flexDirection: 'column',
      margin:10

    },
    newsinfodesign:
    {
      padding:10,
      backgroundColor:'#fafafa',
      borderRadius: 10,
      height: 'auto',
      width: 'auto',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.15,
      shadowRadius: 0.65,
      elevation: 1,

    },
    buttonCircle: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(0, 0, 0, .2)',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    }





    

})