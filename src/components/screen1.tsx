import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import Screen2 from "./screen2";
import Screen3 from "./screen3";

const Stack = createNativeStackNavigator();
function Screen({navigation})
{
    return(
        <SafeAreaView>
        <Text>sdsbshkrigjksjlfdjflsfj1</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('second')}><Text>second</Text></TouchableOpacity>
        </SafeAreaView>
    )
}

function Screen1()
{
    return(
        <Stack.Navigator>
            <Stack.Screen name="first" component={Screen} options={{title:'first'}}/>
            <Stack.Screen name= "second" component={Screen2}/>
            <Stack.Screen name="third" component={Screen3}/>
        </Stack.Navigator>
    )
}
export default Screen1;
