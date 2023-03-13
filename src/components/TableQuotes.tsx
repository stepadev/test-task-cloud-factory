import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { IData }  from '../screens/QuotesScreen';
import Error from '../components/Error';

interface TableItemProps {
  tickerName: string;
  last: string;
  highestBid: string;
  percentChange: string;
}

const TableItem = ({ tickerName, last, highestBid, percentChange }: TableItemProps) => {
  return (
    <View style={styles.row}>
      <Text style={styles.cell}>{tickerName}</Text>
      <Text style={styles.cell}>{last}</Text>
      <Text style={styles.cell}>{highestBid}</Text>
      <Text style={styles.cell}>{percentChange}</Text>
    </View>
  );
};

const TableHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerCell}>Ticker Name</Text>
      <Text style={styles.headerCell}>Last</Text>
      <Text style={styles.headerCell}>Highest Bid</Text>
      <Text style={styles.headerCell}>% Change</Text>
    </View>
  );
};

interface ITableProps {
  data: IData[];
  error: boolean;
  ListHeaderComponent?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
}


const TableQuotes: React.FC<ITableProps> = ({ data, error }) => {
  return (
    <View style={styles.container}>
      <TableHeader />
      {error && <View><Error error={error} /></View>}
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TableItem
            tickerName={item.tickerName}
            last={item.last}
            highestBid={item.highestBid}
            percentChange={item.percentChange}
          />
        )}
        keyExtractor={(item) => item.tickerName}
        ListHeaderComponent={<View />}
        // Render 20 items at a time
        initialNumToRender={20}
        // Render 10 items ahead of the current window
        windowSize={10}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerCell: {
    fontWeight: 'bold',
    width: '25%',
    textAlign: 'center',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  cell: {
    width: '25%',
    textAlign: 'center',
    fontSize: 11,
  },
});

export default TableQuotes;