import * as React from 'react';
import { Button, Text, View } from 'react-native';

const Login = ({navigation}) => {
    return(
      
        <View style = {{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text> Login Screen </Text>
            <Button
            title = "Login screen"
            onPress = {() => alert("test")} />
        </View>
       
    );
  };

  export default Login;