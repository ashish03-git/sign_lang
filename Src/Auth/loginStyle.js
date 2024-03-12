import { StyleSheet } from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";

const loginStyles = StyleSheet.create({
    container:{
        width:responsiveScreenWidth(100),
        height:responsiveScreenHeight(100),
    },
    topContainer:{
        flex:3,
        backgroundColor:"red"
    },
    inputFiledContainer:{
        flex:2,
        backgroundColor:'green'
    },
    bottomContainer:{
        flex:1,
        backgroundColor:"purple"
    }
})

export default loginStyles