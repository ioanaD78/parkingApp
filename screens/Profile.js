import * as React from 'react';
import { Button, Text, View } from 'react-native';

const profileScreen = ({navigation}) => {
    return(
    
        <View style = {{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text> Profile Screen </Text>
            <Button
            title = "Go to home"
            onPress = {() => navigation.navigate("Home")} />
        </View>
    
    );
  };

  export default profileScreen;