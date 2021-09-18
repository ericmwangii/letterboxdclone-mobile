import React from 'react';
import {View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const Home = () => {
  function signOut() {
    auth()
      .signOut()
      .then(() => console.log('Signed Out'));
  }

  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
};

export default Home;
