import 'react-native-gesture-handler';
import React from 'react';
import Auth from 'src/Components/Auth/Auth';
import {AuthProvider} from 'src/Context/AuthContext';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthProvider>
          <Auth />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
