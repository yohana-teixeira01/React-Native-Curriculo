import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Home } from '../screens/Home'
import { Academic } from '../screens/Academic'
import { Professional } from '../screens/Professional'
import { Skills } from '../screens/Skills'
import { ExtraActivities } from '../screens/ExtraActivities'

const Tab = createMaterialBottomTabNavigator();

export function MyTabMaterialNavigation() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      activeColor='black'
      barStyle={{ backgroundColor: 'turquoise' }}>
        
        <Tab.Screen 
          name='Home'
          component={Home}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="face-woman" color={color} size={26} />
            ),
          }} 
        />

        <Tab.Screen
          name='Professional'
          component={Professional} 
          options={{
            tabBarLabel: 'Profissional',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="briefcase" color={color} size={26} />
            ),
          }} 
        />
        <Tab.Screen
          name='Academic'
          component={Academic}
          options={{
            tabBarLabel: 'Acadêmico',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="school" color={color} size={26} />
            ),
          }} 
        />
        
        
        <Tab.Screen
          name='Skills'
          component={Skills}
          options={{
            tabBarLabel: 'Competências',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
            ),
          }} 
        />   
        
        <Tab.Screen
          name='ExtraActivities'
          component={ExtraActivities}
          options={{
            tabBarLabel: 'Extras',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="hand-heart" color={color} size={26} />
            ),
          }} 
        /> 
             
    </Tab.Navigator>
  );
}