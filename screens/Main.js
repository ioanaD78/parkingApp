import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Text, View } from 'react-native';

import Home from './Home';
import Profile from './Profile';

const homeStack = createStackNavigator();
const profileStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const mainScreen = () => (
//de reparat
    <View>
        <Text> Scan thingie </Text>
        <Icon.Button name = "scan-circle-outline" size = {25} backgroundColor = "#486eb4" onPress = {() => 
               alert('Clicked')}/>

    </View>
)

const homeStackScreen = ({navigation}) => (
    <homeStack.Navigator screenOptions = {{
      headerStyle: {
        backgroundColor: '#486eb4',
      },
      headerTintColor: '#fff',
    }}>
          <homeStack.Screen name = "Home" component = {Home} options = {{
            headerLeft: () => (
              <Icon.Button name = "menu" size = {25} backgroundColor = "#486eb4" onPress = {() => 
                navigation.openDrawer()}/>
            )
              }}
              />
        </homeStack.Navigator> 
  );
  
  const profileStackScreen = ({navigation}) => (
    <profileStack.Navigator screenOptions = {{
      headerStyle: {
        backgroundColor: '#486eb4',
      },
      headerTintColor: '#fff',
    }}>
          <profileStack.Screen name = "Profile" component = {Profile} options = {{
            headerLeft: () => (
              <Icon.Button name = "menu" size = {25} backgroundColor = "#486eb4" onPress = {() => 
                navigation.openDrawer()}>
                </Icon.Button>
            )
              }}
              />
        </profileStack.Navigator> 
  );
  export default mainScreen;