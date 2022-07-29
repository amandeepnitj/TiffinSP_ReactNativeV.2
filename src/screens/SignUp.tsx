import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
} from "react-native";
import { validateEmail } from "../helpers/helper";
import { signupbk } from "../services/apiservice";
import firestore from "@react-native-firebase/firestore";
function SignUp({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [contact, setContact] = useState("");
  const [apt, setApt] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");

  function doregister() {
    if (username.length <= 0) {
      Alert.alert("Please enter the valid username");
      return;
    }
    if (user.length <= 0) {
      Alert.alert("Please enter the valid user");
      return;
    }
    if (gender.length <= 0) {
      Alert.alert("Please enter the valid gender");
      return;
    }
    if (dob.length <= 0) {
      Alert.alert("Please enter the valid date of birth");
      return;
    }
    if (contact.length <= 0) {
      Alert.alert("Please enter the valid Contact");
      return;
    }
    if (apt.length <= 0) {
      Alert.alert("Please enter the valid Apt/Building");
      return;
    }
    if (city.length <= 0) {
      Alert.alert("Please enter the valid City ");
      return;
    }
    if (province.length <= 0) {
      Alert.alert("Please enter the valid Province");
      return;
    }
    if (country.length <= 0) {
      Alert.alert("Please enter the valid Country");
      return;
    }

    if (!validateEmail(username)) {
      Alert.alert("Please enter the valid email format");
      return;
    }
    if (password.length <= 0) {
      Alert.alert("Please enter valid password");
      return;
    }

    try {
      signupthing();
      navigation.goBack();
    } catch (e) {
      Alert.alert("error " + e);
    }
  }
  function signupthing() {
    var res = signupbk(username, password);
    firestore()
      .collection("User")
      .where("emailaddress", "==", username)
      .limit(1)
      .get()
      .then((querySnapshot) => {
        console.log("Total users: ", querySnapshot.size);
        // console.log(querySnapshot)

        if (querySnapshot.size == 0) {
          firestore()
            .collection("User")
            .doc(username)
            .set({
              name: user,
              gender: gender,
              DOB: dob,
              contact: contact,
              emailaddress: username,
              apt: apt,
              city: city,
              province: province,
              country: country,
            })
            .then(() => {
              console.log("User added!");
            });
        }
      });
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      {/* <Text style={styles.backbutton}>Go Back</Text> */}
      {/* <TouchableOpacity onPress={()=> Alert.alert("back button touched")}>
        <Image source={require('./../images/left-arrow.png')} style={styles.backbutton}/>
    </TouchableOpacity> */}
      <ScrollView style={styles.scrollview}>
        <Text style={styles.signuptext}>Sign Up</Text>
        <Text style={styles.signupdescription}>
          Please enter your personal details and address
        </Text>
        <TextInput
          style={styles.textInputs}
          placeholder="Your Name"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => setUser(value)}
        ></TextInput>
        <TextInput
          style={styles.textInputs}
          placeholder="Gender"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => setGender(value)}
        ></TextInput>
        <TextInput
          style={styles.textInputs}
          placeholder="Date Of Birth"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => setDob(value)}
        ></TextInput>
        <TextInput
          style={styles.textInputs}
          placeholder="Contact"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => setContact(value)}
        ></TextInput>
        <TextInput
          style={styles.textInputs}
          placeholder="Email Address"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => setUsername(value)}
          autoCapitalize="none"
          keyboardType="email-address"
        ></TextInput>
        <TextInput
          style={styles.textInputs}
          placeholder="........"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true}
        ></TextInput>
        <Text style={styles.addressdetails}>Address Details</Text>
        <TextInput
          style={styles.textInputs}
          placeholder="Apt/Building/Unit"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => setApt(value)}
        ></TextInput>
        <TextInput
          style={styles.textInputs}
          placeholder="Street Name"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => setStreet(value)}
        ></TextInput>
        <TextInput
          style={styles.textInputs}
          placeholder="City"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => setCity(value)}
        ></TextInput>
        <TextInput
          style={styles.textInputs}
          placeholder="Province"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => setProvince(value)}
        ></TextInput>
        <TextInput
          style={styles.textInputs}
          placeholder="Country"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => setCountry(value)}
        ></TextInput>
        <Pressable style={styles.buttons} onPress={() => doregister()}>
          <Text style={styles.buttontext}>Submit</Text>
        </Pressable>
        <Pressable style={styles.buttons} onPress={() => navigation.goBack()}>
          <Text style={styles.buttontext}>Cancel</Text>
        </Pressable>
        <View style={styles.alreadyaccountview}>
          <Text>Already have an account? </Text>
          <Text
            style={styles.loginlink}
            onPress={() => navigation.navigate("Login")}
          >
            Log In
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    // borderColor:'red',
    // borderWidth:2,
  },
  backbutton: {
    // flex:0.06,
    height: 20,
    width: 20,
  },
  scrollview: {
    flex: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  signuptext: {
    fontSize: 30,
    color: "green",
    fontWeight: "bold",

    marginTop: 5,
    marginBottom: 5,
  },
  signupdescription: {
    marginTop: 5,
    marginBottom: 35,
    fontSize: 15,
  },
  textInputs: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    // marginRight:40,
    // marginLeft:10,
    marginBottom: 30,
  },
  addressdetails: {
    marginTop: 5,
    marginBottom: 25,
    fontSize: 18,

    // fontWeight:'bold'
  },

  buttons: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "green",
    marginBottom: 15,
  },
  buttontext: {
    fontSize: 16,
    lineHeight: 21,
    // fontWeight: 'bold',
    letterSpacing: 0.25,
    color: "white",
  },
  alreadyaccountview: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  loginlink: {
    color: "green",
    //   marginRight:50
  },
});

export default SignUp;
