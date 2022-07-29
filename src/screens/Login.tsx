import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { signin, signout } from "../services/apiservice";
import Forgotpassword from "./Forgotpassword";
import HomePage from "./HomePage";
import Signout from "./Signout";
import SignUp from "./SignUp";
import Tabhomestack from "./Tabnavstack";
import UserProfile from "./UserProfile";
import WelcomePage from "./WelcomePage";

const Stack = createNativeStackNavigator();

export function LoginPage_1({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function dologin() {
    if (username.length <= 0) {
      Alert.alert("Please enter the valid username");
      return;
    }
    if (password.length <= 0) {
      Alert.alert("Please enter valid password");
      return;
    }
    signin(username, password)
      .then(() => {
        console.log("sign in success");
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code === "auth/invalid-email") {
          Alert.alert("Email provided is invalid");
        } else if (error.code === "auth/wrong-password") {
          Alert.alert("Entered password is wrong");
        } else {
          Alert.alert(error.code);
        }
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.AppName}>Hungr</Text>
      <Text style={styles.AppSlogan}>Homely Food Daily!</Text>
      <Image
        style={styles.image1}
        source={require("./../images/james-harris-HYqMhq4gz8c-unsplash.jpg")}
      />
      <Text style={styles.signin}>Sign In</Text>

      <View style={styles.textbox}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter UserName"
          placeholderTextColor="black"
          onChangeText={(value) => setUsername(value)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.textbox}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.ForgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.lgnBtn} onPress={() => dologin()}>
        <Text style={styles.lgnText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.NewUser}> New User? Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function Login() {
  return (
    <Stack.Navigator initialRouteName="welcome">
      <Stack.Screen
        name="Login"
        component={LoginPage_1}
        options={{ title: "Login", headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: "SignUp", headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={Forgotpassword}
        options={{ title: "Forgot Password", headerShown: false }}
      />
      <Stack.Screen
        name="welcome"
        component={WelcomePage}
        options={{ title: "Forgot Password", headerShown: false }}
      />
      <Stack.Screen
        name="userprofile"
        component={UserProfile}
        options={{ title: "User Profile", headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="NavStack"
        component={Tabhomestack}
        options={{ title: "Navstack", headerShown: false }}
      />
      <Stack.Screen
        name="signout"
        component={Signout}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
  // return(
  //   <Stack.Navigator
  //   initialRouteName="Login">
  //       <Stack.Screen name ='Login' component={LoginPage_1} options={{title:"Login"}}/>
  //       <Stack.Screen name ='SignUp' component={SignUp} options={{title:"Sign Up"}}/>
  //       <Stack.Screen name ='ForgotPassword' component={Forgotpassword} options={{title:"Forgot Password"}}/>
  //       {/* <Stack.Screen name ='UserProfile' component={UserProfile} options={{title:"User Profile"}}/> */}
  //       <Stack.Screen name ='HomePage' component={HomePage} options={{title:" Home "}}/>
  //       {/* <Stack.Screen name ='Drawer' component={Drawer} options={{title:" Home Screen "}}/> */}
  //       <Stack.Screen name ='WelcomePage' component={WelcomePage} options={{title:" Welcome "}}/>

  //   </Stack.Navigator>
  // )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginLeft: 10,
  },
  lgnText: {
    textAlign: "justify",
    color: "white",
  },
  image1: {
    marginLeft: 10,
    width: 350,
    height: 260,
    borderRadius: 25,
    // ...Platform.select({
    //     ios: {
    //         shadowColor: 'black',
    //         shadowOffset: { width: 0, height: 2 },
    //         shadowOpacity: 0.8,
    //         shadowRadius: 2
    //     },
    //     android: {
    //         shadowOffset: {elevation: 10},
    //     }}),
  },

  textbox: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 80,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    borderColor: "black",
    borderWidth: 1,
    width: 330,
    borderRadius: 25,
  },

  ForgotPassword: {
    height: 30,
    marginBottom: 10,
    color: "green",
    marginLeft: 25,
    fontWeight: "bold",
  },

  lgnBtn: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    marginLeft: 20,
  },
  AppName: {
    textAlign: "left",
    textShadowColor: "green",
    fontSize: 40,
    fontWeight: "bold",

    color: "green",
    marginLeft: 20,
  },
  AppSlogan: {
    marginLeft: 20,
    textAlign: "left",
    textShadowColor: "black",
    fontSize: 20,
    fontWeight: "100",

    color: "black",
    marginBottom: 10,
  },
  signin: {
    textShadowColor: "black",
    fontSize: 25,
    fontWeight: "bold",
    color: "green",

    margin: 20,
  },
  NewUser: {
    color: "green",
    marginTop: 10,
    marginLeft: 25,
    fontWeight: "bold",
  },
});

export default Login;
