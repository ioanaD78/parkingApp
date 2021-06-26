import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, TouchableOpacity, Image, Keyboard
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Input from '../components/form/Input';
import LoginButton from '../components/form/LoginButton';
import Bttn from '../components/form/Bttn';
import { windowHeight } from '../components/utils/WindowDimensions';
export default class login extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Login',
    headerRight:
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{ margin: 10, backgroundColor: 'orange', padding: 10 }}>
        <Text style={{ color: '#ffffff' }}>Home</Text>
      </TouchableOpacity>

  });
  constructor(props) {
    super(props)
    this.state = {
      userEmail: '',
      userPass: ''
    }
  }

  Login = () => {

    const { userEmail } = this.state;
    const { userPass } = this.state;

    if (userEmail == "") {
      //alert("Please enter Email address");
      this.setState({ email: 'Please enter Email address' })
    }

    else if (userPass == "") {
      this.setState({ password: 'Please enter password' })
    }
    else {

      fetch('http://192.168.1.2:80/find-the-driver/login.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          email: userEmail,
          password: userPass
        })

      })
        .then((response) => response.text())
        .then((responseJson) => {
          //console.warn(responseJson);
          if (responseJson == "ok") {
            alert("E-mail or password might be incorrect. Please try again.");
          } else {
            this.props.navigation.navigate("Contact");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }


    Keyboard.dismiss();
  }

  render() {
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
          onChangeText={userEmail => this.setState({ userEmail })}
        />
        <Input
          placeholderText="Password"
          iconType="lock-closed-outline"
          secureTextEntry={true}
          onChangeText={userPass => this.setState({ userPass })}
        />

        <LoginButton
          buttonTitle="Sign In"
          onPress={this.Login}
        />


        <Bttn
          buttonTitle="Forgot password"
          onPress={() => alert('Main')}
        />
        <Bttn
          buttonTitle="Don't have an account? Sign up!"
          onPress={() => this.props.navigation.navigate('Register')}
        />


      </View >

    );
  }
}
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

AppRegistry.registerComponent('login', () => login);

// import * as React from 'react';
// import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { windowHeight } from '../components/utils/WindowDimensions';


// const Login = ({ navigation }) => {

//   return (
    // <View style={styles.container}>
    //   <Image
    //     source={require('../images/5.png')}
    //     style={styles.logo}
    //   />
    //   <Text style={styles.text}> Log In </Text>

    //   <Input
    //     placeholderText="Email"
    //     iconType="mail-outline"
    //     keyboardType="email-address"
    //     autoCapitalize="none"
    //   />
    //   <Input
    //     placeholderText="Password"
    //     iconType="lock-closed-outline"
    //     secureTextEntry={true}
    //   />

    //   <LoginButton
    //     buttonTitle="Sign In"
    //     onPress={() => alert('Main')}
    //   />


    //   <Bttn
    //     buttonTitle="Forgot password"
    //     onPress={() => alert('Main')}
    //   />
    //   <Bttn
    //     buttonTitle="Don't have an account? Sign up!"
    //     onPress={() => navigation.navigate("Register")}
    //   />


    // </View >
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     padding: 15,
//     marginTop: windowHeight / 30,
//   },
//   logo: {
//     height: 300,
//     width: 300,
//     resizeMode: 'cover',
//   },
//   text: {
//     fontSize: 30,
//     marginBottom: 10,
//     color: '#34548a',
//   },
//   navButton: {
//     marginTop: 15,
//   },
//   forgotButton: {
//     marginVertical: 35,
//   },
//   navButtonText: {
//     marginBottom: -30,
//     fontSize: 18,
//     fontWeight: '500',
//     color: '#2e64e5',
//   },
// });