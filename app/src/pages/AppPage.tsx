import './AppPage.css';
import Filters from '../components/Filters/Filters';
import Table from '../components/Table/Table';
import { useEffect, useState } from 'react';
import { Call, fetchCalls } from '../utils/api';
import { formatCalls } from '../utils/formatCalls';

const AppPage = () => {
  const [rows, setRows] = useState<Call[]>([]);

  useEffect(() => {
    const getCalls = async () => {
      try {
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - 3);

        const dateStart = startDate.toISOString().split('T')[0];
        const dateEnd = endDate.toISOString().split('T')[0];
        const inOut = '';

        const calls = await fetchCalls(dateStart, dateEnd, inOut);
        setRows(calls);
      } catch (error) {
        console.error(error);
      }
    };

    getCalls();
  }, []);

  const formattedRows = formatCalls(rows);

  return (
    <div className="wrapper">
      <Filters />
      <Table rows={formattedRows} />
    </div>
  );
};

export default AppPage;
