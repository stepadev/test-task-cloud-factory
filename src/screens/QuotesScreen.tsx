import React, { useEffect, useState } from 'react';
import TableQuotes from '../components/TableQuotes';
import { DummyData } from '../store/DummyData';

const data = Object.entries(DummyData).map(([key, value]) => {
  return { tickerName: key, ...value };
});

export const QuotesScreen = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
  }, []);

  return (
    <TableQuotes data={tableData} />
  );
}