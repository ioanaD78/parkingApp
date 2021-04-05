import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Onboarding from './screens/Onboarding';
import Login from './screens/Login';
import AsyncStorage from '@react-native-community/async-storage';

const AppStack = createStackNavigator();

const App = () => {
return(
      <NavigationContainer>
      <AppStack.Navigator
      headerMode = "none"
      >
        <AppStack.Screen name = "Onboarding" component = {Onboarding} />
        <AppStack.Screen name = "Login" component = {Login} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}


export default App;