import * as React from 'react';
import { Button, Text, View } from 'react-native';

const contactScreen = ({ navigation }) => {
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> reset Screen </Text>
            <Button
                title="Go to home"
                onPress={() => alert("Profile")} />
        </View>

    );
};

export default contactScreen;