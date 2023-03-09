import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './stacks/AppStack';

export const Navigate = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
} 