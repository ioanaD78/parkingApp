import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {windowHeight, windowWidth} from '../components/utils/WindowDimensions';

import Input from '../components/form/Input';
import LoginButton from '../components/form/LoginButton';

const Login = ({navigation}) => {

    return(
      <View style = {styles.container}>
        <Image
          source = {require('../images/placeholder.png')}
          style = {styles.logo}
        />
        <Text style = {styles.text}> Test </Text>

        <Input
          placeholderText = "Email"
          iconType = "mail-outline"
          keyboardType = "email-address"
          autoCapitalize = "none"
        />
         <Input
          placeholderText = "Password"
          iconType = "lock-closed-outline"
          secureTextEntry = {true}
        />

        <LoginButton
          buttonTitle = "Sign In"
          onPress = {() => alert('Sign in Test')}
        />

        <TouchableOpacity style = {styles.forgotButton} onPress = {() => alert ('Forgot test')}>
          <Text style = {styles.navButtonText}> Forgot Password </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.forgotButton} onPress = {() => navigation.navigate("Register")}>
          <Text style = {styles.navButtonText}> Don't have an account? Register now! </Text>
        </TouchableOpacity>

       </View>
    );
  };

  export default Login;

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      padding: 30,
      marginTop: windowHeight / 6,
    },
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 30,
      marginBottom: 10,
      color: '#34548a',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
  });