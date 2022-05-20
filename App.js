import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { MyTabMaterialNavigation } from './components/MyTabMaterialNavigation.js';


export default function App() {
  
  return (
    <NavigationContainer>
      <MyTabMaterialNavigation/>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
