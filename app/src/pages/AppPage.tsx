import './AppPage.css';
import Filters from '../components/Filters/Filters';
import Table from '../components/Table/Table';
import { useEffect, useState } from 'react';
import { Call, fetchCalls } from '../utils/api';
import { formatCalls } from '../utils/formatCalls';

const AppPage = () => {
  const [rows, setRows] = useState<Call[]>([]);
  const [filter, setFilter] = useState('');
  const [dateRange, setDateRange] = useState('3 дня');
  const [customDateRange, setCustomDateRange] = useState(() => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 3);
    return { startDate, endDate };
  });

  useEffect(() => {
    const updateDateRange = () => {
      const endDate = new Date();
      const startDate = new Date();

      switch (dateRange) {
        case 'Неделя':
          startDate.setDate(endDate.getDate() - 7);
          break;
        case 'Месяц':
          startDate.setMonth(endDate.getMonth() - 1);
          break;
        case 'Год':
          startDate.setFullYear(endDate.getFullYear() - 1);
          break;
        default:
          startDate.setDate(endDate.getDate() - 3);
          break;
      }

      setCustomDateRange({ startDate, endDate });
    };

    updateDateRange();
  }, [dateRange]);

  useEffect(() => {
    const getCalls = async () => {
      try {
        const { startDate, endDate } = customDateRange;

        const dateStart = startDate.toISOString().split('T')[0];
        const dateEnd = endDate.toISOString().split('T')[0];

        const calls = await fetchCalls(dateStart, dateEnd, filter);
        setRows(calls);
      } catch (error) {
        console.error(error);
      }
    };

    getCalls();
  }, [filter, dateRange, customDateRange]);

  const formattedRows = formatCalls(rows);

  const handleLeftArrowClick = () => {
    const endDate = new Date(customDateRange.endDate);
    const startDate = new Date(customDateRange.startDate);

    switch (dateRange) {
      case 'Неделя':
        startDate.setDate(startDate.getDate() - 7);
        endDate.setDate(endDate.getDate() - 7);
        break;
      case 'Месяц':
        startDate.setMonth(startDate.getMonth() - 1);
        endDate.setMonth(endDate.getMonth() - 1);
        break;
      case 'Год':
        startDate.setFullYear(startDate.getFullYear() - 1);
        endDate.setFullYear(endDate.getFullYear() - 1);
        break;
      default:
        startDate.setDate(startDate.getDate() - 3);
        endDate.setDate(endDate.getDate() - 3);
        break;
    }

    setCustomDateRange({ startDate, endDate });
  };

  const handleRightArrowClick = () => {
    const endDate = new Date(customDateRange.endDate);
    const startDate = new Date(customDateRange.startDate);

    switch (dateRange) {
      case 'Неделя':
        startDate.setDate(startDate.getDate() + 7);
        endDate.setDate(endDate.getDate() + 7);
        break;
      case 'Месяц':
        startDate.setMonth(startDate.getMonth() + 1);
        endDate.setMonth(endDate.getMonth() + 1);
        break;
      case 'Год':
        startDate.setFullYear(startDate.getFullYear() + 1);
        endDate.setFullYear(endDate.getFullYear() + 1);
        break;
      default:
        startDate.setDate(startDate.getDate() + 3);
        endDate.setDate(endDate.getDate() + 3);
        break;
    }

    setCustomDateRange({ startDate, endDate });
  };

  const handleCustomDateRangeChange = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (!isNaN(start.getTime()) && !isNaN(end.getTime()) && start <= end) {
      setCustomDateRange({ startDate: start, endDate: end });
    } else {
      console.error('Invalid date range selected');
    }
  };

  return (
    <div className="wrapper">
      <Filters
        onFilterChange={setFilter}
        onDateRangeChange={setDateRange}
        onLeftArrowClick={handleLeftArrowClick}
        onRightArrowClick={handleRightArrowClick}
        onCustomDateRangeChange={handleCustomDateRangeChange}
      />
      <Table rows={formattedRows} />
    </div>
  );
};

export default AppPage;
