import './AppPage.css';
import Filters from '../components/Filters/Filters';
import Table from '../components/Table/Table';
import { useEffect, useState } from 'react';
import { Call, fetchCalls } from '../utils/api';
import { formatCalls } from '../utils/formatCalls';

const AppPage = () => {
  const [rows, setRows] = useState<Call[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const getCalls = async () => {
      try {
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - 3);

        const dateStart = startDate.toISOString().split('T')[0];
        const dateEnd = endDate.toISOString().split('T')[0];

        const calls = await fetchCalls(dateStart, dateEnd, filter);
        setRows(calls);
      } catch (error) {
        console.error(error);
      }
    };

    getCalls();
  }, [filter]);

  const formattedRows = formatCalls(rows);

  return (
    <div className="wrapper">
      <Filters onFilterChange={setFilter} />
      <Table rows={formattedRows} />
    </div>
  );
};

export default AppPage;
