import React from 'react';
import { StatusBar, StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Curriculo from './Curriculo';

const Stack = createStackNavigator();

// Componente para a tela inicial (Home)
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 24 }}>Seja bem vindo!</Text>
      <StatusBar style="auto" />
      <Image source={require('./assets/logo.png')} />
      <Button
        title ="Ver currículo"
        onPress={() => navigation.navigate('Curriculo')}
        color="#00FF00"
        
      />
    </View>
  );
}


const navigationOptions = {
  headerStyle: {
    backgroundColor: '#00FF00', // Defina a cor de fundo da barra de navegação como verde
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={navigationOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Curriculo" component={Curriculo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
