import React from 'react';
import { ScrollView} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import ListAccordionComponent from '../components/ListAccordionComponent';

export function Skills() {
  return(
    <SafeAreaView style={{flex:1}}>
    <ScrollView showsHorizontalScrollIndicator ={false} >
        <ListAccordionComponent/>
    </ScrollView>
    </SafeAreaView>
  )
}