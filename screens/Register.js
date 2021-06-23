import { Component } from 'react';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Input from '../components/form/Input';
import LoginButton from '../components/form/LoginButton';
class Register extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      password: ''
    }
  }

  updateValue(text, field) {
    if (field == 'name') {
      this.setState({
        name: text,
      })
    }
    else if (field == 'email') {
      this.setState({
        email: text,
      })
    }
    else if (field == 'password') {
      this.setState({
        password: text,
      })
    }
  }

  submit() {
    let collection = {}
    collection.email = this.state.email,
      collection.password = this.state.password,
      collection.name = this.state.name
    console.log(collection);

    fetch('http://192.168.56.1/register', {
      method: 'POST',
      body: JSON.stringify(collection),
      header: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
  }

  render() {
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
          onChangeText={(text) => this.updateValue(text, 'name')}
        />
        <Input
          placeholderText="Email"
          iconType="mail-outline"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => this.updateValue(text, 'email')}
        />

        <Input
          placeholderText="Password"
          iconType="lock-closed-outline"
          secureTextEntry={true}
          onChangeText={(text) => this.updateValue(text, 'password')}
        />

        <LoginButton
          buttonTitle="Sign Up"
          onPress={() => this.submit()}
        />

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Login")}>
          <Text style={styles.navButtonText}>Have an account? Sign in!</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

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