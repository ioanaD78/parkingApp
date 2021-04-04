import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Onboarding from './screens/Onboarding';
import Login from './screens/Login';

const appStack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <appStack.Navigatior
      headerMode = "none"
      >
        <appStack.Screen name = "Onboarding" component = {Onboarding} />
        <appStack.Screen name = "Login" component = {Login} />
      </appStack.Navigatior>
    </NavigationContainer>
  )
}

export default App;