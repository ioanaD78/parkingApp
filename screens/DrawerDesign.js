import * as React from 'react';

import { View, StyleSheet } from 'react-native';
import { Title, Caption, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import UserAvatar from 'react-native-avatar-generator';
import Icon from 'react-native-ionicons';

//update avatar, license plate and username to connect with DB
export function DrawerDesign(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 40 }}>

              <UserAvatar styles={styles.avatar}
                size={60}
                firstName="John" //de scos din DB dupa cont
                lastName="Doe"
              />

              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title styles={styles.title}>
                  Name Surname
                </Title>
                <Caption styles={styles.caption}>
                  License plate
                </Caption>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 50 }}>
            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon
                    name="scan-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Home"
                onPress={() => { props.navigation.navigate('Home') }}
              />
            </Drawer.Section>

            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon
                    name="person-circle-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Profile"
                onPress={() => { props.navigation.navigate('Profile') }}
              />
            </Drawer.Section>

            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon
                    name="mail-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Contact"
                onPress={() => { props.navigation.navigate('Contact') }}
              />
            </Drawer.Section>
          </View>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={{ marginBottom: 40 }}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="log-out-outline"
              color={color}
              size={size}
            />
          )}
          label="Sign Out"
          onPress={() => alert('Sign out test')}
        />
      </Drawer.Section>
    </View>
  );
}

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