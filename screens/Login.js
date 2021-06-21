import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { windowHeight } from '../components/utils/WindowDimensions';

import Input from '../components/form/Input';
import LoginButton from '../components/form/LoginButton';

const Login = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/5.png')}
        style={styles.logo}
      />
      <Text style={styles.text}> Log In </Text>

      <Input
        placeholderText="Email"
        iconType="mail-outline"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        placeholderText="Password"
        iconType="lock-closed-outline"
        secureTextEntry={true}
      />

      <LoginButton
        buttonTitle="Sign In"
        onPress={() => alert('Main')}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => alert('Forgot test')}>
        <Text style={styles.navButtonText}> Forgot Password </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.replace("Register")}>
        <Text style={styles.navButtonText}>Don't have an account? Sign up!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 15,
    marginTop: windowHeight / 30,
  },
  logo: {
    height: 300,
    width: 300,
    resizeMode: 'cover',
  },
  text: {
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
    marginBottom: -30,
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
  },
});