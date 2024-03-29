import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '../screens/Screens';
import { BottomTab } from '../tabs/BottomTab';

export const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Screens.TABNAV} component={BottomTab} />
    </Stack.Navigator>
  );
}