import React, { useEffect, useState } from "react";
import {
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  unstable_batchedUpdates,
} from "react-native";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
function UserProfile({ navigation }) {
  const [user, setUser] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.email);

        //
        firestore()
          .collection("User")
          .where("emailaddress", "==", user.email)
          .limit(1)
          .get()
          .then((querySnapshot) => {
            console.log("Total users: ", querySnapshot.size);
            // console.log(querySnapshot)

            querySnapshot.forEach((documentSnapshot) => {
              //console.log("User ID: ", documentSnapshot.data());
              const a = documentSnapshot.data();
              if (a) {
                setUser(a.name);
                setGender(a.gender);
                setDob(a.DOB);
                setContact(a.contact);
                console.log(a);
              }
            });
          });

        //
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });
      }
    });
  }, []);
  function updatethis() {
    auth().onAuthStateChanged((user1) => {
      if (user1) {
        console.log(user1.email);

        //
        firestore()
          .collection("User")
          .where("emailaddress", "==", user1.email)
          .limit(1)
          .get()
          .then((querySnapshot) => {
            console.log("Total users: ", querySnapshot.size);
            // console.log(querySnapshot)

            querySnapshot.forEach((documentSnapshot) => {
              //console.log("User ID: ", documentSnapshot.data());
              const a = documentSnapshot.data();
              if (a) {
                //

                firestore()
                  .collection("User")
                  .doc(a.emailaddress)
                  .update({
                    name: user,
                    gender: gender,
                    DOB: dob,
                    contact: contact,
                  })
                  .then(() => {
                    console.log("User updated!");
                  });

                //
              }
            });
          });

        //
      }
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      }, 500);
    });
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Image
        source={require("./../images/icon-account.png")}
        style={styles.userprofileicon}
      />
      <View style={styles.mainview}>
        <View style={styles.upperportion}>
          <Text style={styles.yourprofiletext}>User Profile</Text>
          <TextInput
            style={styles.textInputs}
            placeholder="Name"
            underlineColorAndroid={"transparent"}
            value={user}
            onChangeText={(value) => setUser(value)}
          ></TextInput>
          <TextInput
            style={styles.textInputs}
            placeholder="Gender"
            value={gender}
            underlineColorAndroid={"transparent"}
            onChangeText={(value) => setGender(value)}
          ></TextInput>
          <TextInput
            style={styles.textInputs}
            placeholder="Date Of Birth"
            underlineColorAndroid={"transparent"}
            value={dob}
            onChangeText={(value) => setDob(value)}
          ></TextInput>
          <TextInput
            style={styles.textInputs}
            placeholder="Phone"
            value={contact}
            underlineColorAndroid={"transparent"}
            onChangeText={(value) => setContact(value)}
          ></TextInput>
          {/* <TextInput
            style={styles.textInputs}
            placeholder="Email"
            underlineColorAndroid={"transparent"}
          ></TextInput> */}
        </View>
        <View style={styles.lowerportion}>
          <TouchableOpacity
            style={styles.savebutton}
            onPress={() => updatethis()}
          >
            <Text style={styles.buttontext}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelbutton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttontext}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",

    backgroundColor: "white",
  },
  backbutton: {
    marginTop: 50,
    height: 20,
    width: 20,
  },
  userprofileicon: {
    marginLeft: 320,
    marginTop: 10,
    //alignSelf: 'flex-end',
    height: 60,
    width: 60,
  },
  mainview: {
    flex: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  upperportion: {
    flex: 1,
  },
  lowerportion: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    marginBottom: 50,
  },
  yourprofiletext: {
    fontSize: 40,
    color: "green",
    fontWeight: "300",

    marginTop: 20,
    marginBottom: 60,
  },
  textInputs: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    // marginRight:40,
    // marginLeft:10,
    marginBottom: 30,
  },
  savebutton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "green",
    marginBottom: 15,
  },
  cancelbutton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "grey",
    marginBottom: 15,
  },
  buttontext: {
    fontSize: 16,
    lineHeight: 21,
    // fontWeight: 'bold',
    letterSpacing: 0.25,
    color: "white",
  },
});

export default UserProfile;
