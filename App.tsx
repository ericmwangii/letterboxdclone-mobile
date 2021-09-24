import 'react-native-gesture-handler';
import React from 'react';
import Auth from 'src/Components/Auth/Auth';
import {AuthProvider} from 'src/Context/AuthContext';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#1C2228',
    text: 'white',
  },
};

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={Theme}>
        <AuthProvider>
          <Auth />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
