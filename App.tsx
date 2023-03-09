import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
    fontWeight: '600',
    color: 'white'
  }
});

export default App;