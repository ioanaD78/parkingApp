import * as React from 'react';
import { Button, Text, View } from 'react-native';

const contactScreen = ({navigation}) => {
    return(
    
        <View style = {{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text> Contact Screen </Text>
            <Button
            title = "Go to home"
            onPress = {() => alert("Contact")} />
        </View>
    
    );
  };

  export default contactScreen;