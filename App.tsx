import React from 'react';
import { SafeAreaView } from 'react-native';
import { Navigate } from './src/navigation/Navigate';

const App = () => {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <Navigate />
    </SafeAreaView>
  );
}

export default App;