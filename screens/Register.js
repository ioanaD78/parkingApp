import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Input from '../components/form/Input';
import LoginButton from '../components/form/LoginButton';

const Register = ({ navigation }) => {

  return (

    <View style={styles.container}>
      <Image
        source={require('../images/5.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Create an account</Text>

      <Input
        placeholderText="Full name"
        iconType="person-outline"
        autoCapitalize="words"
        autoCorrect={false}
      />
      <Input
        placeholderText="Email"
        iconType="mail-outline"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Input
        placeholderText="Password"
        iconType="lock-closed-outline"
        secureTextEntry={true}
      />

      <LoginButton
        buttonTitle="Sign Up"
        onPress={() => alert('Register test')}
      />

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Login")}>
        <Text style={styles.navButtonText}>Have an account? Sign in!</Text>
      </TouchableOpacity>
    </View>

  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 20,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
  },
  forgotButton: {
    marginVertical: 15,
  },
  logo: {
    height: 300,
    width: 300,
    resizeMode: 'cover',
  },
});