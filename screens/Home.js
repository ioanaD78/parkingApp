import * as React from 'react';
import { Button, Text, View } from 'react-native';

const Home = ({navigation}) => {
    return(
      
        <View style = {{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text> Home Screen </Text>
            <Button
            title = "Go to profile"
            onPress = {() => navigation.navigate("Profile")} />
        </View>
       
    );
  };

  export default Home;