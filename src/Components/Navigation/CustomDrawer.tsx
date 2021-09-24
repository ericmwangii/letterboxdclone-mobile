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
import {useTheme} from '@react-navigation/native';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const {user} = useAuth();
  const {colors} = useTheme();

  const SignOut = () => {
    auth().signOut();
  };

  return (
    <View style={styles.Container}>
      <View style={styles.ProfileConatiner}>
        <Image source={{uri: user?.photoURL}} style={styles.ProfilePhoto} />
      </View>
      <View style={styles.DisplayName}>
        <Text style={{color: colors.text}}>{user?.displayName}</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <DrawerItem
        // eslint-disable-next-line react-native/no-inline-styles
        labelStyle={{color: 'white'}}
        label="Sign Out"
        icon={({size}) => <Ionicons name="log-out" size={size} color="white" />}
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
});

export default CustomDrawer;
