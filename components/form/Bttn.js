import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../utils/WindowDimensions';

const LoginButton = ({ buttonTitle, ...rest }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} {...rest}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
};

export default LoginButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight / 30,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginTop: 40,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2e64e5',
    },
});