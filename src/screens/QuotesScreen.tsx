import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import TableQuotes from '../components/TableQuotes';
import { useIsFocused } from '@react-navigation/native';
import Error from '../components/Error';

export interface IData {
  tickerName: string;
  last: string;
  highestBid: string;
  percentChange: string;
};

const API_URL = 'https://poloniex.com/public?command=returnTicker';

export const QuotesScreen = () => {
  
  const isFocused = useIsFocused(); 
  const [tableData, setTableData] = useState<IData[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const preData = Object.keys(data).map((key) => ({
        tickerName: key,
        ...data[key],
      }));
      setTableData(preData);
      setLoading(false);
      if (data.error) {
        setError(true);
      } else {
        setError(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  
  useEffect(() => {

    if (isFocused) {
      fetchData();

      const intervalId = setInterval(() => {
        fetchData();
      }, 5000);

      return () => clearInterval(intervalId);
    }

    return () => {
      setTableData([]);
      setError(false);
    }

  }, [isFocused]);

  return (
    loading ? (
      <ActivityIndicator size="large" color="#0000ff" />
    ) : (
      <TableQuotes
        data={tableData}
        error={error}
        ListHeaderComponent={<Error error={error} />}
      />
    )
  );
};
