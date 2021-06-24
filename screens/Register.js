import React, { Component } from 'react';
import {
  StyleSheet, Text, Image, View, TouchableOpacity, Vibration, TextInput,
} from 'react-native';
import Input from '../components/form/Input';
import LoginButton from '../components/form/LoginButton';
import Bttn from '../components/form/Bttn';
class Register extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      password: '',
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
    collection.name = this.state.name,
      collection.email = this.state.email,
      collection.password = this.state.password,
      console.warn(collection);

    var url = 'http://192.168.1.2:80/register';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(collection),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
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
      </View>
    )
  }
}
export default Register;

// import { Component } from 'react';
// import * as React from 'react';
// import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';



// const Register = ({ navigation }) => {

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../images/5.png')}
//         style={styles.logo}
//       />
//       <Text style={styles.text}>Create an account</Text>

//       <Input
//         placeholderText="Full name"
//         iconType="person-outline"
//         autoCapitalize="words"
//         autoCorrect={false}
//         onChangeText={(text) => this.updateValue(text, 'name')}
//       />
//       <Input
//         placeholderText="Email"
//         iconType="mail-outline"
//         keyboardType="email-address"
//         autoCapitalize="none"
//         autoCorrect={false}
//         onChangeText={(text) => this.updateValue(text, 'email')}
//       />


//       <Input
//         placeholderText="Password"
//         iconType="lock-closed-outline"
//         secureTextEntry={true}
//         onChangeText={(text) => this.updateValue(text, 'password')}
//       />

//       <LoginButton
//         buttonTitle="Sign Up"
//         onPress={() => this.submit()}
//       />


//       <Bttn
//         buttonTitle="Already have an account? Sign in!"
//         onPress={() => navigation.navigate("Login")}
//       />
//     </View >
//   )
// }

// export default Register;

const styles = StyleSheet.create({
  container: {

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
