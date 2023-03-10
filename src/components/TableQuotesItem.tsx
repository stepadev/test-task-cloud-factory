import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TableQuotesItem = ({ tickerName, last, highestBid, percentChange }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.column}>{tickerName}</Text>
      <Text style={styles.column}>{last}</Text>
      <Text style={styles.column}>{highestBid}</Text>
      <Text style={styles.column}>{percentChange}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  column: {
    flex: 1,
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default TableQuotesItem;