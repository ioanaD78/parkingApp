import * as React from 'react';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import Onboarding from './screens/Onboarding';
import Main from './screens/Main';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';

const AppStack = createStackNavigator();

const App = () => {

  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      }
      else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if(isFirstLaunch == null){
    return null;
  }
  else if(isFirstLaunch == true) {
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
  else {
   return <Register />
  }

}


export default App;