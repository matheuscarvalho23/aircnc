import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, AsyncStorage, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import logo from '../assets/logo.png';
import SpotList from '../components/SpotList';

export default function List({navigation}) {

  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storagedTechs => {
      const techsArray = storagedTechs.split(',').map(tech => tech.trim());
      setTechs(techsArray);
    })
  }, []);

  async function handleLogout() {
    await AsyncStorage.clear();

    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleLogout}>
        <Image style={styles.logo} source={logo}/>
      </TouchableOpacity>
      <View style={styles.line}/>

      <ScrollView>
        {techs.map(tech => <SpotList key={tech} tech={tech}></SpotList>)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  logo: {
    height: 32,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 40
  },

  line: {
    borderWidth: 0.5,
    borderColor: '#999',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10
  }
});