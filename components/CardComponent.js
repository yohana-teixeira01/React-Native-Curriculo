import * as React from 'react';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import ButtonLinkingComponent from './ButtonLinkingComponent';

const LeftContent = props => <Avatar.Icon {...props} icon={"pin"} />

const CardComponent = ({title, subtitle, local, dataInicio, dataFim, urlLinkButton,extra, urlPhotoAvatar, urlPhotoCover}) => (
  <Card>
    <Card.Title title={title} subtitle={subtitle} left={LeftContent} />
    <Card.Content>
      <Title>{local}</Title>
      <Paragraph>{dataInicio} - {dataFim}</Paragraph>
      <Paragraph>{extra}</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: urlPhotoCover }} />
    <Card.Actions>
      <ButtonLinkingComponent title='Visitar' icon='web' url={urlLinkButton}/>
      
    </Card.Actions>
  </Card>
);

export default CardComponent;