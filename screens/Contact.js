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
// import * as React from 'react';
// import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { windowHeight } from '../components/utils/WindowDimensions';

// import Input from '../components/form/Input';
// import InputMsg from '../components/form/InputMsg';
// import LoginButton from '../components/form/LoginButton';

// const Login = ({ navigation }) => {

//     return (
//         <View style={styles.container}>

//             <Text style={styles.text}> Contact us! </Text>

//             <Input
//                 placeholderText="Name"
//                 iconType="person-circle-outline"
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//             />
//             <Input
//                 placeholderText="E-mail"
//                 iconType="mail-outline"
//             />
//             <InputMsg
//                 placeholderText="Message"
//                 iconType="chatbox-ellipses-outline"
//             />

//             <LoginButton
//                 buttonTitle="Send"
//                 onPress={() => Linking.openURL('mailto:ioana8877@gmail.com?subject=SendMail&body=Description')}
//                 title="ioana8877@gmail.com"
//             />


//         </View>
//     );
// };

// export default Login;

// const styles = StyleSheet.create({
//     container: {
//         alignItems: 'center',
//         padding: 15,
//         marginTop: windowHeight / 10,
//     },
//     text: {
//         fontSize: 30,
//         marginBottom: 10,
//         color: '#34548a',
//     },
//     navButton: {
//         marginTop: 15,
//     },
// });