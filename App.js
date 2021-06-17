
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./screens/DrawerNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
export default App;
// import * as React from 'react';
// import { useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import Onboarding from './screens/Onboarding';

// import Login from './screens/Login';
// // import Main from './screens/Main';
// import Register from './screens/Register';
// import Test from './screens/Test';

// const AppStack = createStackNavigator();

// const App = () => {

//   const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

//   useEffect(() => {
//     AsyncStorage.getItem('alreadyLaunched').then(value => {
//       if (value === null) {
//         AsyncStorage.setItem('alreadyLaunched', 'true');
//         setIsFirstLaunch(true);
//       }
//       else {
//         setIsFirstLaunch(false);
//       }
//     });
//   }, []);

//   if (isFirstLaunch == null) {
//     return null;
//   }
//   else if (isFirstLaunch == true) {
//     return (
//       <NavigationContainer>
//         <AppStack.Navigator
//           headerMode="none"
//         >
//           <AppStack.Screen name="Onboarding" component={Onboarding} />
//           <AppStack.Screen name="Login" component={Login} />
//           <AppStack.Screen name="Register" component={Register} />
//           <AppStack.Screen name="Main" component={Main} />
//           <AppStack.Screen name="Test" component={Test} />
//         </AppStack.Navigator>
//       </NavigationContainer>
//     );
//   }
//   else {
//     return <Test />
//   }

// }


// export default App;