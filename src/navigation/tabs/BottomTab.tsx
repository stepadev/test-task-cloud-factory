import React from 'react';
import { Screens } from '../screens/Screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AboutScreen } from '../../screens/AboutScreen';
import { QuotesScreen } from '../../screens/QuotesScreen';
import { IconSvgHome } from '../../assets/icons/IconSvgHome';
import { IconSvgHomeActive } from '../../assets/icons/IconSvgHomeActive';
import { IconSvgGraph } from '../../assets/icons/IconSvgGraph';

export const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tab.Screen 
        name={Screens.ABOUT} 
        component={AboutScreen}
        options={{
          tabBarIcon: ({focused}) => { return focused ? <IconSvgHomeActive/> : <IconSvgHome/> }
        }} 
      />
      <Tab.Screen 
        name={Screens.QUOTES} 
        component={QuotesScreen}
        options={{
          tabBarIcon: () => { return  <IconSvgGraph /> }
        }} 
      />
    </Tab.Navigator>
  );
}