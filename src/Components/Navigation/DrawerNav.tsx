import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from 'src/Components/Screens/Home';
import Lists from 'src/Components/Screens/Lists';
import Profile from 'src/Components/Screens/Profile';
import WatchList from 'src/Components/Screens/WatchList';
import Reviews from 'src/Components/Screens/Reviews';
import Diary from 'src/Components/Screens/Diary';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomDrawer from './CustomDrawer';
import {Routes} from 'src/Interface/Routes';
import StackNav from './StackNav';

const Drawer = createDrawerNavigator<Routes>();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerLabelStyle: {
          color: 'white',
        },
        headerStyle: {
          backgroundColor: '#1C2228',
        },

        drawerStyle: {
          backgroundColor: '#1C2228',
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({size}) => (
            <Ionicons name="home" color="white" size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Search"
        component={StackNav}
        options={{
          drawerIcon: ({size}) => (
            <Ionicons name="search" color="white" size={size} />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Diary"
        component={Diary}
        options={{
          drawerIcon: ({size}) => (
            <Ionicons name="calendar" color="white" size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="WatchList"
        component={WatchList}
        options={{
          drawerIcon: ({size}) => (
            <Ionicons name="time" color="white" size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Lists"
        component={Lists}
        options={{
          drawerIcon: ({size}) => (
            <Ionicons name="list" color="white" size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="Reviews"
        component={Reviews}
        options={{
          drawerIcon: ({size}) => (
            <Ionicons name="reader" color="white" size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({size}) => (
            <Ionicons name="person" color="white" size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
