import React, { useEffect, useState } from 'react';
import TableQuotes from '../components/TableQuotes';
import { DummyData } from '../store/DummyData';

interface IData {
  tickerName: string;
  last: string;
  highestBid: string;
  percentChange: string;
};

const data: IData[] = Object.entries(DummyData)
  .map(([key, value]) => { return { tickerName: key, ...value };
});
//console.log(data);

export const QuotesScreen = () => {
  const [tableData, setTableData] = useState<IData[]>([]);

  useEffect(() => {
    setTableData(data);
  }, []);

  return <TableQuotes data={tableData} />;
};