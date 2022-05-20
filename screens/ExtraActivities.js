import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import FlatListComponent from '../components/FlatListComponent';


export function ExtraActivities() {
  return(
    <SafeAreaView style={styles.container}>
        <FlatListComponent/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
});