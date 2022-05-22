import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Caption, Paragraph, Subheading, Headline, Chip } from 'react-native-paper';



const Item = ({ title, local, area ,materia, description, tag }) => (
  <View style={styles.item}>
    <Chip icon="information">{tag}</Chip>
    <Headline>{title}</Headline>
    <Subheading>{local}</Subheading>
    <Caption>{area}</Caption>
    <Caption>{materia}</Caption>
    <Paragraph>{description}</Paragraph>
  </View>
);

const FlatListComponent = () => {
  const renderItem = ({ item }) => (
    <Item 
      title={item.title}
      local={item.local}
      area={item.area}
      description={item.description}
      tag={item.tag}  
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#84dfd3',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
    title: 'Musculação',
    local: 'Halteres e pesos',
    area: 'Exercício Físico', 
    initialDate: '',
    endDate: '',
    description: 'Pratico exercícios físicos, porque além de gostar sei faz muito meu pra saúde. A musculação é algo que me dar energia para minha rotina diária.',
    tag: 'ativa',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Monitoria',
    local: 'Remoto',
    materia: 'Lógica de Programação', 
    initialDate: '03/2021',
    endDate: '06/2021',
    description: 'Essas monitorias tinham como objetivo ajudar os calouros do curso a entender a lógica de programação, foram aulas ministradas aos sábados para não atrapalhar nas aulas semanais.',
    tag: 'inativa'
  },
];

export default FlatListComponent;