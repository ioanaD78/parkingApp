import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Onboarding from './screens/Onboarding';
import Login from './screens/Login';

const AppStack = createStackNavigator();

const App = () => {
return(
      <NavigationContainer>
      <AppStack.Navigator
      headerMode = "none"
      >
    
      </AppStack.Navigator>
    </NavigationContainer>
  );
}


export default App;