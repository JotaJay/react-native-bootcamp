import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

export default function app() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="purple" />
      <View style={styles.container}>
        <Text style={styles.title}>CARALHO VEJA AQUI</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'pink',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
