import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const QuotesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Quotes Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
    fontWeight: '600'
  }
});