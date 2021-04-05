import * as React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const onboardingScreen = ({navigation}) => {
  return (
    <Onboarding

    onSkip = {() => navigation.replace("Login")}
    onDone = {() => navigation.navigate("Login")}

    pages={[
      {
        backgroundColor: '#E9F5F1',
        image: <Image source={require('../images/1.png')} />,
        title: 'Complete your profile',
        titleStyles: { color: '#343434',  fontWeight: 'bold'},
        subtitle: 'Allow people to connect with you!',
        
      },
      {
        backgroundColor: '#E9F5F1',
        image: <Image source={require('../images/2.png')} />,
        title: 'Connect with drivers',
        titleStyles: { color: '#343434',  fontWeight: 'bold'},
        subtitle: 'Scan a license plate and contact the driver!',
        
      },
      {
        backgroundColor: '#E9F5F1',
        image: <Image source={require('../images/3.png')} />,
        title: 'Improve traffic',
        titleStyles: { color: '#343434',  fontWeight: 'bold'},
        subtitle: 'Communication between drivers made easy!',
         
      },
    ]}
  />
  );
};

export default onboardingScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  });