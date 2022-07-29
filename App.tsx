/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
   StyleSheet
} from 'react-native';
import Screen1 from './src/components/screen1';
import screen1 from './src/components/screen1';
import Forgotpassword from './src/screens/Forgotpassword';
import HomePage from './src/screens/HomePage';

import Login, { LoginPage_1 } from './src/screens/Login';
import SignUp from './src/screens/SignUp';


const App = () => {
  

  return (
    <NavigationContainer>
      <Login/>
      {/* <Text>Aman</Text> */}
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
