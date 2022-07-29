import React from "react";
import {Image,TouchableOpacity, Pressable,Alert,Text, SafeAreaView, StyleSheet, View, ScrollView, TextInput} from "react-native";

function ResetPassword()
{
    return(
        <SafeAreaView style={styles.wrapper}>
            {/* <Text style={styles.backbutton}>Go Back</Text> */}
            
            <View style={styles.mainview}>
                <View style={styles.upperportion}>
                <Text style={styles.forgottext}>Reset Password</Text>
                <Text style={styles.forgotdescription}>Please enter your email address to send reset password mail</Text>
                <TextInput style={styles.textInputs} placeholder="Email Address" underlineColorAndroid={'transparent'}></TextInput>
                </View>
                <View style={styles.lowerportion}>
                <TouchableOpacity style={styles.submitbutton} onPress={()=>console.log("submit button touched")}>
                <Text style={styles.buttontext}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelbutton} onPress={()=>console.log("back button touched")}>
                <Text style={styles.buttontext}>Cancel</Text>
                </TouchableOpacity>
                </View>
                
            </View>
            

        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        wrapper:{
            flex:1,
            flexDirection:'column',
            // borderColor:'red',
            // borderWidth:2,
            marginLeft:15,
            marginRight:15
        },
        backbutton:{
            // flex:0.06,
            height:20,
            width:20,
        },
        mainview:{
            flex:10,
            // backgroundColor:'skyblue'
        },
        upperportion:{
          flex:1,
          
        },
        lowerportion:{
          flex:1,
          flexDirection:'column',
          justifyContent:'flex-end',
          marginBottom:50
        },
        forgottext:{
            fontSize:40,
            color:'green',
            fontWeight:'300',
           
            marginTop:5,
            marginBottom:5
        },
        forgotdescription:{
            marginTop:5,
            marginBottom:50,
            fontSize:20,
            
        },
        textInputs:{
            borderBottomColor:'grey',
            borderBottomWidth:1,
            // marginRight:40,
            // marginLeft:10,
            marginBottom:30
        },
        
        
        submitbutton: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: 'green',
            marginBottom:15
          },
          cancelbutton:{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: 'grey',
            marginBottom:15
          },
          buttontext: {
            fontSize: 16,
            lineHeight: 21,
            // fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
          },
          

    }
)


export default ResetPassword;