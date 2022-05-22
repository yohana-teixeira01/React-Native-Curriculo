import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView} from 'react-native';
import { Headline, Paragraph, Subheading} from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import  api from '../../websevice';


import AvatarComponent from '../components/AvatarComponent';
import ButtonLinkingComponent from '../components/ButtonLinkingComponent';


export function Home() { 

   const [dados,setDados] = useState();
   
   useEffect( async () => {
     const response = await api.get("/dadosPessoais")
     setDados(response.data)
   },[])

   console.log(dados)
  
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator ={false}>
        <AvatarComponent style={styles.section}/>
        <Headline  style={styles.section}>{setDados?[name]:name}</Headline>
        <Subheading>{dados?[description]:description}</Subheading>
        <ButtonLinkingComponent
          title='linkedin'
          icon='linkedin'
          url={setDados?[linkLinkedin]:linkLinkedin}
        >{setDados?[name]:name}
        </ButtonLinkingComponent>
        <Subheading style={styles.section}> Sobre mim</Subheading>
        <Paragraph style={styles.section}>{setDados?[about]:about}</Paragraph>
    </ScrollView>
    </SafeAreaView>
 
      )
}


const styles = StyleSheet.create({
   container: {
    flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     padding: 36,
     backgroundColor: '#f0f0f9',
   },
   section:{
     marginTop: 20
   },
});


//dados estaticos
const name = 'Yohana Teixeira'
const description = 'Full stack developer | React | JavaScript | Java | Node.js | Spring Boot | Graduanda em Sistemas Para Internet 4° Período'
const linkLinkedin = 'https://www.linkedin.com/in/yohana-teixeira-269a40213'
const about = 'Meu objetivo é iniciar minha vida profissional sendo uma desenvolvedora que é a área de interesse a qual quero conseguir me desenvolver bem no futuro. Podendo agregar já de forma inicial com soft skills, a comunicação assertiva, proatividade, trabalho em equipe, métodos ágeis. E com hard skills, o react, java, javascript, node.js. Além de estudar na faculdade tenho participado ativamente da residência de Software do Porto Digital, com isso, consigo desenvolver mais minhas habilidades e melhor nas partes que não sou tão habilidosa. Atualmente estou em busca de estágio, estou a disposição para mais informações.' 