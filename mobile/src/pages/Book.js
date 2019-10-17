import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import logo from '../assets/logo.png';
import rocket from '../assets/rocket.png';

export default function Book({ navigation }) {

  const id = navigation.getParam('id');

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo}/>
      <View style={styles.line}/>

      <View>
        <Image style={styles.face} source={rocket}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 32,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 40
  },

  line: {
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10
  },

  face: {
    margin: 20,
    borderWidth: 5,
    borderColor: '#dcdcdc',
    borderRadius: 80,
    alignSelf: 'center',
    width: 160,
    height: 160,
    
  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },

  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});