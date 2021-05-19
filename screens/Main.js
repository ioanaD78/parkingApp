import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import windowWidth from '../components/utils/WindowDimensions'
import windowHeight from '../components/utils/WindowDimensions'

//add header cu buton de menu

const mainScreen = ({navigation}) => {
  return(
  
      <View style = {styles.container}>
         <TouchableOpacity style={styles.button}>
        <Icon.Button
          name = "scan-circle-outline"
          size = {300}
          color = "#34548a"
          style = {styles.button}
          onPress = {() => alert("Clicked")} />
      </TouchableOpacity>
      </View>
  
  );
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#fff",
      width: windowWidth,
      height: windowHeight,
      borderRadius: 30,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#fff",
      paddingLeft: 17,
    },
  });

  
  export default mainScreen;

