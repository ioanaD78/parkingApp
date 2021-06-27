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

export default class UpdateLPN extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'UpdateLPN',

    });
    constructor(props) {
        super(props)
        this.state = {
            userEmail: '',
            userPlate: ''
        }
    }

    Update = () => {

        fetch('http://192.168.1.2:80/find-the-driver/update-plate.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                email: this.state.userEmail,
                plate: this.state.userPlate,

            })

        }).then((response) => response.text())
            .then((responseJson) => {

                // Showing response message coming from server updating records.
                alert(responseJson);

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
                <Text style={styles.text}> Change License Plate Number </Text>

                <Input
                    placeholderText="E-mail"
                    iconType="mail-outline"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={userEmail => this.setState({ userEmail })}
                />
                <Input
                    placeholderText="New license plate (eg. BV 01MMM)"
                    iconType="car-sport-outline"
                    autoCapitalize="characters"
                    onChangeText={userPlate => this.setState({ userPlate })}
                />

                <LoginButton
                    buttonTitle="Change license plate number"
                    onPress={this.Update}
                />

            </View >

        );
    }
}

AppRegistry.registerComponent('UpdateLPN', () => UpdateLPN);

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
        marginBottom: 30,
    },
    text: {
        fontSize: 20,
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


