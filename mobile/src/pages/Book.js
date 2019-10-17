import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, AsyncStorage, TextInput, TouchableOpacity, Alert } from "react-native";
import logo from '../assets/logo.png';
import rocket from '../assets/rocket.png';
import api from '../services/api';

export default function Book({ navigation }) {

  const [date, setDate] = useState('');
  const id = navigation.getParam('id');
  // const company = navigation.getParam('company');

  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem('user');
    await api.post(`/spots/${id}/bookings`, {
      date
    }, {
      headers: { user_id }
    })

    Alert.alert('Solicitação de reserva enviada.');
    navigation.navigate('List');
  }

  function handleCancel() {
    navigation.navigate('List');
    console.log(id);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo}/>
      <View style={styles.line}/>
      <View>
        <Image style={styles.companyImage} source={rocket}/>
      </View>
      {/* FORM */}

      <Text style={styles.label}>DATA DE INTERESSE *</Text>
      <TextInput
          style={styles.input}
          placeholder="Qual dia deseja reservar?"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={date}
          onChangeText={setDate}
      />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}> Solicitar reserva </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCancel} style={[styles.button, styles.cancelButton]}>
          <Text style={styles.buttonText}> Cancelar </Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    margin: 40
  },
  logo: {
    height: 32,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  line: {
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10
  },

  companyImage: {
    margin: 20,
    borderWidth: 5,
    borderColor: '#dcdcdc',
    borderRadius: 50,
    alignSelf: 'center',
    width: 100,
    height: 100
  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
    marginTop: 15
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

  cancelButton: {
    backgroundColor: '#ccc',
    marginTop: 10
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});