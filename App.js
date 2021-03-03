import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Link from './src/components/Linking/Linking';
import Font from './src/components/FontFamily/Font';


export default function App() {
   
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Link/>
      <Font />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
