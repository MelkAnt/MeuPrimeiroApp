import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Curriculo() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Meu currículo</Text>
        <Image source={require('./assets/profile.jpg')} style={styles.profileImage} />
        <Text style={styles.name}>Melksedec Silva</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Idade: 23 anos</Text>
          <Text style={styles.text}>Endereço: Recife - PE</Text>
          <Text style={styles.text}>Contato: (81) 99887-6432</Text>
          <Text style={styles.text}>Formação: Graduação em Análise e Desenvolvimento de Sistemas</Text>
          <Text style={styles.text}>Experiência: 2 anos de experiência como desenvolvedor</Text>
          {/* Adicione mais componentes de texto para outros dados do currículo */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  textContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'left',
  },
});
