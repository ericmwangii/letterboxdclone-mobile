import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {StyleSheet, Text, View, Image} from 'react-native';
import {useAuth} from 'src/Context/AuthContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const {user} = useAuth();

  const SignOut = () => {
    auth().signOut();
  };

  return (
    <View style={styles.Container}>
      <View style={styles.ProfileConatiner}>
        <Image source={{uri: user?.photoURL}} style={styles.ProfilePhoto} />
      </View>
      <View style={styles.DisplayName}>
        <Text style={styles.DisplayText}>{user?.displayName}</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <DrawerItem
        label="Sign Out"
        icon={({color, size}) => (
          <Ionicons name="log-out" size={size} color={color} />
        )}
        onPress={SignOut}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ProfileConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  ProfilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  DisplayName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  DisplayText: {
    color: '#686868',
  },
});

export default CustomDrawer;
