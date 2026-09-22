import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function Card({ titulo, corFundo = '#f0f0f0' }) {
  return (
    <View style={[styles.container, { backgroundColor: corFundo }]}>
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
  },
  titulo: {
    fontSize: 16,
  },
});


export default function App() {
  return (
    <View>
      <Card titulo="Olá, Mundo!" corFundo="#4B0082" />
      <Card titulo="Card sem cor definida" />
    </View>
  );
}
