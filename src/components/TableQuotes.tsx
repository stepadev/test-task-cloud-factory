import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import TableQuotesItem from './TableQuotesItem';
import { DummyData } from '../store/DummyData';


const data = Object.entries(DummyData).map(([key, value]) => {
  return { tickerName: key, ...value };
});

const TableQuotes = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
  }, []);

  const renderItem = ({ item }) => (
    <TableQuotesItem
      tickerName={item.tickerName}
      last={item.last}
      highestBid={item.highestBid}
      percentChange={item.percentChange}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tableData}
        renderItem={renderItem}
        keyExtractor={(item) => item.tickerName}
        // Render 10 items at a time
        initialNumToRender={10}
        // Render 10 items ahead of the current window
        windowSize={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default TableQuotes;