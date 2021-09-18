import React from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Text, StyleSheet, View} from 'react-native';
import {WEBCLIENT_ID} from '@env';
import Icon from 'react-native-vector-icons/FontAwesome';

GoogleSignin.configure({
  webClientId: WEBCLIENT_ID,
});

const onGoogleButtonPress = async () => {
  const {idToken} = await GoogleSignin.signIn();

  //create google credential with token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  return auth().signInWithCredential(googleCredential);
};

const SignUp = () => {
  return (
    <View style={styles.Login}>
      <Icon.Button
        name="google"
        backgroundColor="#4285F4"
        onPress={onGoogleButtonPress}>
        <Text>Login with Google</Text>
      </Icon.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  Login: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignUp;
