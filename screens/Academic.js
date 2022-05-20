import React from 'react';
import { ScrollView } from 'react-native';
import { Divider } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import CardComponent from '../components/CardComponent';


export function Academic() {
  return(
    <SafeAreaView >
    <ScrollView>
        <CardComponent
            title={curso}
            subtitle={area}
            local={nomeInstituicao}
            dataInicio={dataInicio}
            dataFim={dataFim}
            urlLinkButton={siteInstituicao}
            urlPhotoAvatar={logoInstituicao}
            urlPhotoCover={urlefotoInstituicao}>
        </CardComponent>

        <Divider />

        <CardComponent
            title={curso2}
            subtitle={area2}
            local={nomeInstituicao2}
            dataInicio={dataInicio2}
            dataFim={dataFim2}
            urlLinkButton={siteInstituicao2}
            urlPhotoAvatar={logoInstituicao2}
            urlPhotoCover={urlefotoInstituicao2}>
        </CardComponent>
    </ScrollView>
    </SafeAreaView>
  )
}


//dados estáticos
const nomeInstituicao = 'Unicap'
const siteInstituicao = 'https://portal.unicap.br/'
const logoInstituicao = 'https://www.rdmapps.com.br/assets/square-rosa-a0f279ac8dcf3b756490606225c4cfb674bc69554bb2bf4dae1a55107db4c769.png'
const urlefotoInstituicao = 'https://www.estudopratico.com.br/wp-content/uploads/2016/12/conheca-a-universidade-catolica-de-pernambuco-unicap-1200x675.jpg'
const curso = 'Sistemas para Internet'
const area = 'Tecnologia da Informação'
const dataInicio = '2020.2'
const dataFim = '2022.2'



const nomeInstituicao2 = 'Avanade'
const siteInstituicao2 = 'https://www.avanade.com/pt-br'
const logoInstituicao2 = 'https://www.avanade.com/-/media/logo/share-avanade-logo.jpg?la=pt-br&ver=1'
const urlefotoInstituicao2 = 'https://www.avanade.com/-/media/logo/share-avanade-logo.jpg?la=pt-br&ver=1'
const curso2 = 'Curso de Extensão Avanade'
const area2 = 'Data Analytics'
const dataInicio2 = 'nov/2021'
const dataFim2 = 'jan/2022'