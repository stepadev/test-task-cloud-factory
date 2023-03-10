import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const response = {
  "BTC_BTS": {
    "id" : 14,
    "last" : "0.0000005044",
    "lowestAsk" : "0.0000004937",
    "highestBid" : "0.0000004901",
    "percentChange" : "0.0000000000",
    "baseVolume" : "0.0015000856",
    "quoteVolume" : "2974.0000000000",
    "isFrozen" : "0",
    "postOnly" : "0",
    "high24hr" : "0.0000005044",
    "low24hr" : "0.0000005044"
  },
  "BTC_DASH": {
    "id" : 24,
    "last" : "0.002514",
    "lowestAsk" : "0.002520",
    "highestBid" : "0.002509",
    "percentChange" : "-0.060000",
    "baseVolume" : "0.852728",
    "quoteVolume" : "329.870000",
    "isFrozen" : "0",
    "postOnly" : "0",
    "high24hr" : "0.002790",
    "low24hr" : "0.002514"
  }
};

const data = Object.entries(response).map(([key, value]) => {
  return { tickerName: key, ...value };
});

const TableQuotesItem = ({ data }) => {
  return (
    <View style={styles.row}>
      <View style={styles.cell}>
        <Text style={styles.cellText}>{data.tickerName}</Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellText}>{data.last}</Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellText}>{data.highestBid}</Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellText}>{data.percentChange}</Text>
      </View>
    </View>
  );
};

export const QuotesScreen = () => {
  return (
    <View style={styles.table}>
      {
        data.map((item, key) => (
          <TableQuotesItem key={key} data={item} />
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  cell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  cellText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});