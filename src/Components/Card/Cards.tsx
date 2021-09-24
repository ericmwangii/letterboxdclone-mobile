import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Cards = () => {
  return (
    //TODO remove hardcorded values
    <View style={styles.Container}>
      <View style={styles.Watched}>
        <Ionicons name="eye-outline" color="white" size={18} />
        <Text style={styles.Text}>Watched 800k</Text>
      </View>
      <View style={styles.Reviews}>
        <Ionicons name="reader" color="white" size={18} />
        <Text style={styles.Text}>Reviews 500k</Text>
      </View>
      <View style={styles.Lists}>
        <Ionicons name="list" color="white" size={18} />
        <Text style={styles.Text}>Lists 202k</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 6,
  },
  Watched: {
    backgroundColor: '#23ce6b',
    elevation: 2,
    borderRadius: 10,
    padding: 10,
  },
  Reviews: {
    backgroundColor: '#445566',
    elevation: 2,
    borderRadius: 10,
    padding: 10,
  },
  Lists: {
    backgroundColor: '#40bcd8',
    elevation: 2,
    borderRadius: 10,
    padding: 10,
  },
  Text: {
    color: 'white',
  },
});

export default Cards;
