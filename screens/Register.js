import React, { Component } from 'react';

import { StyleSheet, Image, View, Alert, Text } from 'react-native';

import Input from '../components/form/Input';
import LoginButton from '../components/form/LoginButton';
import Bttn from '../components/form/Bttn';
class SignUp extends Component {

  constructor(props) {

    super(props)

    this.state = {

      userName: '',
      userEmail: '',
      userPass: '',
      userPhone: '',
      userPlate: '',

    }

  }

  Register = () => {


    const { userName } = this.state;
    const { userEmail } = this.state;
    const { userPass } = this.state;
    const { userPhone } = this.state;
    const { userPlate } = this.state;



    fetch('http://192.168.1.2:80/find-the-driver/register.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        name: userName,

        email: userEmail,

        password: userPass,

        phone: userPhone,

        plate: userPlate

      })

    }).then((response) => response.text())
      .then((responseText) => {

        // Showing response message coming from server after inserting records.
        Alert.alert(responseText);

      }).catch((error) => {
        console.error(error);
      });


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
          onChangeText={userName => this.setState({ userName })}
        />
        <Input
          placeholderText="Email"
          iconType="mail-outline"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={userEmail => this.setState({ userEmail })}
        />
        <Input
          placeholderText="Password"
          iconType="lock-closed-outline"
          secureTextEntry={true}
          onChangeText={userPass => this.setState({ userPass })}
        />

        <Input
          placeholderText="Phone Number (eg. 0765656565)"
          iconType="call-outline"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={userPhone => this.setState({ userPhone })}
        />
        <Input
          placeholderText="License plate number (eg. BV 01BMI)"
          iconType="car-sport-outline"
          autoCapitalize="characters"
          autoCorrect={false}
          onChangeText={userPlate => this.setState({ userPlate })}
        />

        <LoginButton
          buttonTitle="Sign Up"
          onPress={this.Register}
        />

        <Bttn
          buttonTitle="Already have an account? Sign in!"
          onPress={() =>
            this.props.navigation.navigate('Login')
          }
        />
      </View>




    );
  }
}

export default SignUp;

const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 25,
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
    height: 250,
    width: 250,
    resizeMode: 'cover',
  },
});