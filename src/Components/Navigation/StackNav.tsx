import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Movie from 'src/Components/Screens/Movie';
import Search from 'src/Components/Screens/Search';
import {Routes} from 'src/Interface/Routes';

const Stack = createStackNavigator<Routes>();

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="SearchScreen"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Movie"
        component={Movie}
        options={({route}) => ({title: route.params.name})}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
