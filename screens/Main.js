import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Main extends Component {
  state = {
    data: ''
  }
  componentDidMount = () => {
    fetch('http://192.168.1.2:80/plateRecognition', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }

    })
      .then((response) => response.text())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          data: responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>
          hi
          {this.state.data.plateRecognition}
        </Text>
      </View>
    )
  }
}
export default Main;

// import * as React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { View, TouchableOpacity, StyleSheet, ImagePickerIOS } from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';

// import { windowHeight, windowWidth } from '../components/utils/WindowDimensions'

// //add header cu buton de menu

// const mainScreen = ({ navigation }) => {

//    const takePhoto = () => {

//       ImagePicker.openCamera({
//          width: 300,
//          height: 400,
//          cropping: true,
//       }).then(image => {
//          console.log(image);
//       });

//    }

//    return (

//       <View style={styles.container}>
//          <TouchableOpacity style={styles.button}>
//             <Icon.Button
//                name="scan-circle-outline"
//                size={300}
//                color="#34548a"
//                style={styles.button}
//                onPress={takePhoto} />
//          </TouchableOpacity>
//       </View>

//    );
// };

// const styles = StyleSheet.create({
//    container: {
//       flex: 1,
//       justifyContent: "center",
//       backgroundColor: "#fff",
//       width: windowWidth,
//       height: windowHeight,
//       borderRadius: 5,
//    },
//    button: {
//       alignItems: "center",
//       backgroundColor: "#fff",
//       paddingLeft: 17,
//    },
// });


// export default mainScreen;

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

/*
Just make changes in line 28 to make the magic : - )
*/


// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   bigBlue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 50,
//     backgroundColor: '#FF6666',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   red: {
//     color: 'red',
//   },
// });

// class HttpExample extends Component {
//   state = {
//     data: '',
//   };
//   componentDidMount = () => {
//     fetch('http://192.168.1.2:80/time', {
//       method: 'GET',
//     })
//       .then((response) => response.json())
//       .then((responseJson) => {
//         console.log(responseJson);
//         this.setState({
//           data: responseJson,
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
//   render() {
//     return (
//       <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
//         <Text style={styles.bigBlue}>{this.state.data.time}</Text>
//         <Text style={styles.bigBlue}>plm</Text>
//       </View>
//     );
//   }
// }
// export default HttpExample;
