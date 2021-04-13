import * as React from 'react';
import { useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, Text, View } from 'react-native';


import AsyncStorage from '@react-native-community/async-storage';

import Main from './screens/Main';
import Profile from './screens/Profile';
import Contact from './screens/Contact';
import Onboarding from './screens/Onboarding';

import { DrawerNav } from './screens/DrawerNav'
import { createStackNavigator } from '@react-navigation/stack';

//const screenStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ScreenStack = createStackNavigator();

const App = () => {

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
        <Drawer.Navigator drawerContent = {props => <DrawerNav{...props}/>}>
          <Drawer.Screen name = "Home" component = {Main}/>
          <Drawer.Screen name = "Profile" component = {Profile}/>
          <Drawer.Screen name = "Contact" component = {Contact}/>
        </Drawer.Navigator>
        </NavigationContainer>

        /* <screenStack.Navigator>
         <screenStack.Screen name = "Onboarding" component = {Onboarding} />
        <screenStack.Screen name = "Login" component = {Login} /> 
      </screenStack.Navigator>  */
  
      

       
  );
  }
//   else {
//    return <Main/>  //replace with login
//   }
// }

export default App;