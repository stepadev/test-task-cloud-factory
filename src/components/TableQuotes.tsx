import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { IData }  from '../screens/QuotesScreen';
import Error from '../components/Error';
import * as Animatable from 'react-native-animatable';

interface TableItemProps {
  tickerName: string;
  last: string;
  highestBid: string;
  percentChange: string;
}

const TableItem = ({ tickerName, last, highestBid, percentChange }: TableItemProps) => {

  const [currentLast, setCurrentLast] = useState(last);
  const [currentHighestBid, setCurrentHighestBid] = useState(highestBid);
  const [currentPercentChange, setCurrentPercentChange] = useState(percentChange);

  useEffect(() => {
    if (last !== currentLast) {
      setCurrentLast(last);
    }
    if (highestBid !== currentHighestBid) {
      setCurrentHighestBid(highestBid);
    }
    if (percentChange !== currentPercentChange) {
      setCurrentPercentChange(percentChange);
    }
  }, [last, highestBid, percentChange]);

  return (
    <Animatable.View animation="fadeIn" duration={3000} style={styles.row}>
      <Animatable.Text animation={last === currentLast ? undefined : 'flash'} style={styles.cell}>
        {tickerName}
      </Animatable.Text>
      <Animatable.Text animation={last === currentLast ? undefined : 'flash'} style={styles.cell}>
        {last}
      </Animatable.Text>
      <Animatable.Text animation={highestBid === currentHighestBid ? undefined : 'flash'} style={styles.cell}>
        {highestBid}
      </Animatable.Text>
      <Animatable.Text animation={percentChange === currentPercentChange ? undefined : 'flash'} style={styles.cell}>
        {percentChange}
      </Animatable.Text>
    </Animatable.View>
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
      {error ? (
        <Error error={error} />
      ) : (
            <FlatList
              data={data}
              renderItem={({ item, index }) => (
                <Animatable.View animation="fadeIn" duration={1 + index * 10}>
                  <TableItem
                    key={`${item.last}-${index}`}
                    tickerName={item.tickerName}
                    last={item.last}
                    highestBid={item.highestBid}
                    percentChange={item.percentChange}
                  />
                </Animatable.View>
              )}
              keyExtractor={(item) => item.tickerName}
              ListHeaderComponent={<View />}
              // Render 20 items at a time
              initialNumToRender={20}
              // Render 10 items ahead of the current window
              windowSize={10}
              showsVerticalScrollIndicator={false}
            />
          )
        }
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