import auth from "@react-native-firebase/auth";
var b = false;
export function signupbk(username, password) {
  auth()
    .createUserWithEmailAndPassword(username, password)
    .then(() => {
      console.log("User account created & signed in!");
      b = true;
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        console.log("That email address is already in use!");
      }

      if (error.code === "auth/invalid-email") {
        console.log("That email address is invalid!");
      }

      console.error(error);
      b = false;
    });
  return b;
}

export function signin(username, password) {
  return auth().signInWithEmailAndPassword(username, password);
}

export function signout() {
  return auth().signOut();
}
