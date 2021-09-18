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
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Search"
        component={StackNav}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name="search" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Diary"
        component={Diary}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="WatchList"
        component={WatchList}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name="time" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Lists"
        component={Lists}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="Reviews"
        component={Reviews}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name="reader" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
