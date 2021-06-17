import * as React from 'react';

import { DrawerDesign } from './DrawerDesign';

import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from 'react-native';
import { ContactStackNavigator } from "./Navigation";
import { MainStackNavigator } from "./Navigation";
import { ProfileStackNavigator } from "./Navigation";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerDesign{...props} />}>

            <Drawer.Screen name="Home" component={MainStackNavigator} />
            <Drawer.Screen name="Profile" component={ProfileStackNavigator} />
            <Drawer.Screen name="Contact" component={ContactStackNavigator} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;


const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    avatar: {
        fontWeight: "bold",
        color: "#fff",
    }
});