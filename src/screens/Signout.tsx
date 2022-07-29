import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { signout } from "../services/apiservice";

export default function Signout({ navigation }) {
  function dosignout() {
    signout()
      .then(() => {
        console.log("sign out success");

        setTimeout(() => {
          navigation.goBack();
        }, 500);
      })
      .catch((error) => {
        console.log(error.code);

        Alert.alert(error.code);
      });
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.lgnBtn} onPress={() => dosignout()}>
        <Text style={styles.lgnText}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginLeft: 10,
    //   flexDirection: "column-reverse"
    justifyContent: "center",
  },
  lgnText: {
    textAlign: "justify",
    color: "white",
  },

  lgnBtn: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    marginLeft: 20,
    marginBottom: 20,
  },
});
