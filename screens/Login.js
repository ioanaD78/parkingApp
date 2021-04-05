import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const onboardingScreen = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <Text> Login Screen </Text>
      <Button
      title = "Click here" 
      onPress = {() => navigation.navigate("Onboarding")}
      />
    </View>
  )
}

export default onboardingScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  });