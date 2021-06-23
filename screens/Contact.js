import React from 'react'
import { StyleSheet, Button, View, Image, Text } from 'react-native'
import email from 'react-native-email'

import Btn from '../components/form/Btn';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../images/5.png')}
                    style={styles.logo}
                />
                <Text style={styles.text}>Talk to us!</Text>
                <Text style={styles.msg}>If you have any feedback, </Text>
                <Text style={styles.msg}>complaints or questions feel free to</Text>
                <Text style={styles.msg}>contact us!</Text>
                <Btn buttonTitle="Send E-mail" onPress={this.handleEmail} />
            </View>
        )
    }

    handleEmail = () => {
        const to = ['ioana.dan.bv@gmail.com']
        email(to, {
            subject: 'Find the Driver - Support',
            body: 'I need help regarding the following issue(s):'
        }).catch(console.error)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 300,
        width: 300,
        paddingBottom: 70,
        resizeMode: 'cover',
    },
    text: {
        fontSize: 35,
        marginBottom: 10,
        color: '#051d5f',
        fontWeight: 'bold',
    },
    msg: {
        fontSize: 20,
        marginBottom: 5,
        color: '#051d5f',
    },
})
