import * as React from 'react';
import { Linking } from 'react-native';
import { Button } from 'react-native-paper';

const ButtonLinkingComponent = ({title, icon, url}) => (
  
  <Button icon={icon} mode="outline" onPress={() => Linking.openURL(url)}>
    {title}
  </Button>
);

export default ButtonLinkingComponent;