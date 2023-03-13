import React, { useEffect, useState } from 'react';
import TableQuotes from '../components/TableQuotes';
import { useIsFocused } from '@react-navigation/native';

interface IData {
  tickerName: string;
  last: string;
  highestBid: string;
  percentChange: string;
};

const API_URL = 'https://poloniex.com/public?command=returnTicker';

export const QuotesScreen = () => {
  
  const isFocused = useIsFocused(); 
  const [tableData, setTableData] = useState<IData[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const preData = Object.keys(data).map((key) => ({
        tickerName: key,
        ...data[key],
      }));
      setTableData(preData);
    } catch (error) {
      console.error(error);
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

    return () => setTableData([]);

  }, [isFocused]);
  
  return <TableQuotes data={tableData} />;

};