import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View,StyleSheet,Image} from "react-native";
function WelcomePage({navigation}){   

    setTimeout(()=>{
        navigation.replace("Login");
    },2000);

    const {wrapper} = styles

    return(
        <View style = {wrapper}>
<Image source = {require('./../images/curve.png')}
       style={{ width:420, height:600,marginTop:-50}}/>
<Image source = {require('./../images/hungr.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:"#fff",
        padding:10,
        alignItems:'center'
    },
    
    
})
export default WelcomePage;