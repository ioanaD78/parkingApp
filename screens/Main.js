// import React, { Component } from 'react'
// import { View, Text, StyleSheet } from 'react-native'

// class Main extends Component {
//    state = {
//       data: ''
//    }
//    componentDidMount = () => {
//       fetch('http://192.168.56.1/plateRecognition', {
//          method: 'GET'
//       })
//          .then((response) => response.json())
//          .then((responseJson) => {
//             console.log(responseJson);
//             this.setState({
//                data: responseJson
//             })
//          })
//          .catch((error) => {
//             console.error(error);
//          });
//    }
//    render() {
//       return (
//          <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
//             <Text>
//                {this.state.data.plateRecognition}
//             </Text>
//          </View>
//       )
//    }
// }
// export default Main;

import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, TouchableOpacity, StyleSheet, ImagePickerIOS } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import { windowHeight, windowWidth } from '../components/utils/WindowDimensions'

//add header cu buton de menu

const mainScreen = ({ navigation }) => {

   const takePhoto = () => {

      ImagePicker.openCamera({
         width: 300,
         height: 400,
         cropping: true,
      }).then(image => {
         console.log(image);
      });

   }

   return (

      <View style={styles.container}>
         <TouchableOpacity style={styles.button}>
            <Icon.Button
               name="scan-circle-outline"
               size={300}
               color="#34548a"
               style={styles.button}
               onPress={takePhoto} />
         </TouchableOpacity>
      </View>

   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#fff",
      width: windowWidth,
      height: windowHeight,
      borderRadius: 5,
   },
   button: {
      alignItems: "center",
      backgroundColor: "#fff",
      paddingLeft: 17,
   },
});


export default mainScreen;

