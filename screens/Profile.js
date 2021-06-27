import * as React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import Btn from '../components/form/Btn';

const contactScreen = ({ navigation }) => {
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={require('../images/5.png')}
                style={styles.logo}
            />
            <Btn buttonTitle="Update license plate number" onPress={() => navigation.navigate('UpdateLPN')} />
            <Btn buttonTitle="Update phone number" onPress={() => navigation.navigate('UpdatePhone')} />
        </View>

    );
};

export default contactScreen;

const styles = StyleSheet.create({
    logo: {
        height: 300,
        width: 300,
        resizeMode: 'cover',
    },
});