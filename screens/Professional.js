import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from 'react-native-paper';


import CardComponent from '../components/CardComponent';


export function Professional() {
  return(
    <SafeAreaView >
    <ScrollView >
      
        <CardComponent
            title={situacao}
            subtitle={tipoDeEmprego}
            local={nomeEmpresa2}
            dataFim={perido}
            extra={extra}
            urlLinkButton={urlGithub}
            urlPhotoCover={urlPhoto}>
            
        </CardComponent>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
   card:{
     padding: 200
   }
});


//dados estaticos
const nomeEmpresa2 = 'Em busca de um estágio' 
const urlGithub = 'https://github.com/yohana-teixeira01'
const urlPhoto = 'https://cdn.abcdoabc.com.br/procurando-emprego_2a74c59c.jpg'
const extra = 'Visite meu github para terem acesso ao meu portfólio.'
const situacao = 'Fora do Mercado'
const tipoDeEmprego = ' Tipo de emprego: Estágio'
const perido = ' Período Atual 4/5'