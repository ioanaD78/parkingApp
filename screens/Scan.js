import * as React from 'react';
import { Button, Text, View } from 'react-native';

const scanScreen = ({navigation}) => {
    return(
    
        <View style = {{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text> Scan Screen </Text>
            <Button
            title = "Go to home"
            onPress = {() => navigation.navigate("Main")} />
        </View>
    
    );
  };

  export default scanScreen;