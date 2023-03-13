import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IErrorProps {
  error: boolean;
}

const Error: React.FC<IErrorProps> = ({ error }) => {
  if (error) {
    return (
      <View style={styles.item}>
        <Text style={[styles.value, styles.error]}>Error</Text>
      </View>
    );
  } else {
    return null;
  }
};

export default Error;


const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  value: {
    fontSize: 20,
    alignItems: 'center',
    alignContent: 'center'
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    alignItems: 'center'
  }
});