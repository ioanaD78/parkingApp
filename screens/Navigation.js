import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./Main";
import Profile from "./Profile";
import Contact from "./Contact";
import Register from "./Register";
import Login from "./Login";
import Onboarding from "./Onboarding";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#34548a",
    },
    headerTintColor: "white",

};

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle} screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Welcome!" component={Onboarding} />
            <Stack.Screen name="Home" component={Main} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
}

const ContactStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    );
}

export { MainStackNavigator, ContactStackNavigator, ProfileStackNavigator };