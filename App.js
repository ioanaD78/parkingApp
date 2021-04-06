import * as React from 'react';
import { useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, Text, View } from 'react-native';


import AsyncStorage from '@react-native-community/async-storage';

import Main from './screens/Main';

//const screenStack = createStackNavigator();
const drawer = createDrawerNavigator();



const app = () => {

  // const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  // useEffect(() => {
  //   AsyncStorage.getItem('alreadyLaunched').then(value => {
  //     if(value === null) {
  //       AsyncStorage.setItem('alreadyLaunched', 'true');
  //       setIsFirstLaunch(true);
  //     }
  //     else {
  //       setIsFirstLaunch(false);
  //     }
  //   });
  // }, []);

  // if(isFirstLaunch == null){
  //   return null;
  // }
  // else if(isFirstLaunch == true) {

    return(
      <NavigationContainer>
        <drawer.Navigator initialRouteName = "Home">
          <drawer.Screen name = "Home" component = {Main}/>
          {/* <drawer.Screen name = "Profile" component = {profileStackScreen}/> */}
        </drawer.Navigator>
      </NavigationContainer>
      /* <screenStack.Navigator
      headerMode = "none"
      >
        {/* <screenStack.Screen name = "Onboarding" component = {Onboarding} />
        <screenStack.Screen name = "Login" component = {Login} /> }

        <screenStack.Screen name = "Home" component = {Home} />
        <screenStack.Screen name = "Profile" component = {Profile} />
      </screenStack.Navigator> */
  
  );
  }
//   else {
//    return <Home />  //replace with login
//   }
// }

export default app;