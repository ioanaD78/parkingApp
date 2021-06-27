import React, { Component } from 'react'
import { View, Text, StyleSheet, Linking, Alert, Platform, Image } from 'react-native'

import { windowHeight } from '../components/utils/WindowDimensions';
class Main extends Component {
  state = {
    data: ''
  }
  componentDidMount = () => {
    fetch('http://192.168.1.2:80/find-the-driver/displayLPR.php', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }

    })
      .then((response) => response.text())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          data: responseJson
        })

      })
      .catch((error) => {
        console.error(error);
      });


  }

  Call = phone => {
    console.log('callNumber ----> ', phone);
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${this.state.data}`;
    }
    else {
      phoneNumber = `tel:${this.state.data}`;
    }
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (!supported) {
          Alert.alert('Phone number is not available');
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../images/5.png')}
          style={styles.logo}
        />
        <Text style={styles.text}> Find the Driver </Text>
        <Text style={styles.txt1}>
          In a couple of seconds you will be able to
        </Text>
        <Text style={styles.txt}>
          contact the driver.
        </Text>
        <Text style={styles.txt}>
          The phone number is:
        </Text>
        <Text style={styles.phone} onPress={this.Call}>{this.state.data}</Text>
        <Text>

        </Text>
      </View>
    )
  }
}

export default Main;

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
    marginBottom: 40,
    color: '#34548a',
    fontWeight: 'bold',
  },
  txt1: {
    color: '#333',
    fontSize: 20,
    justifyContent: 'center',
  },
  txt: {
    color: '#333',
    marginBottom: 20,
    fontSize: 20,
    justifyContent: 'center',
  },
  phone: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2e64e5',
  }
});



