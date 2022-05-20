import * as React from 'react';
import { List } from 'react-native-paper';

const ListAccordionComponent = () => {

  return (
    <List.Section title="Competências">
      <List.Accordion
      title="Idiomas"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="Português" description="(Nativa)"/>
      </List.Accordion>

      <List.Accordion
        title="Linguagens de Programação"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="Java"/>
        <List.Item title="Python"/>
        <List.Item title="Java Script"/>
        <List.Item title="Ruby"/>
      </List.Accordion>

      <List.Accordion
        title="Hard Skills"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="Adobe Photoshop"/>
        <List.Item title="Adobe Illustrator"/>
        <List.Item title="React"/>
        <List.Item title="Spring Boot"/>
        <List.Item title="Bootstrap"/>
        <List.Item title="Nodejs"/>
        <List.Item title="HTML"/>
        <List.Item title="CSS"/>
        <List.Item title="GIT"/>
      </List.Accordion>

      <List.Accordion
        title="Soft Skills"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="Comunicação assertiva"/>
        <List.Item title="Criativa"/>
        <List.Item title="Proativa"/>
        <List.Item title="Paciente"/>
        <List.Item title="Líder"/>
        <List.Item title="Persuasiva"/>
        <List.Item title="Trabalho em Equipe"/>
      </List.Accordion>


    </List.Section>
  );
};

export default ListAccordionComponent;