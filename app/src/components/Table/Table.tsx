import TableRow from '../TableRow/TableRow';
import './Table.css';

interface TableRowData {
  typeImage: string;
  time: string;
  avatar: string;
  phone: string;
  source: string;
  score: string;
  length: string;
  record: string;
  partnership_id: string;
}

interface TableProps {
  rows: TableRowData[];
  onSortByTime: () => void;
  onSortByDuration: () => void;
}

const Table: React.FC<TableProps> = ({
  rows,
  onSortByTime,
  onSortByDuration,
}) => {
  return (
    <div className="table">
      <div className="headers">
        <div className="row-type">Тип</div>
        <div className="dropdown-button row-time" onClick={onSortByTime}>
          <div>Время</div>
          <img
            src="/assets/arrow-down.png"
            alt="arrow"
            className="arrow-icon"
          />
        </div>
        <div className="row-avatar">Сотрудник</div>
        <div className="row-phone">Звонок</div>
        <div className="row-source">Источник</div>
        <div className="row-score">Оценка</div>
        <div className="dropdown-button row-length" onClick={onSortByDuration}>
          <div>Длительность</div>
          <img
            src="/assets/arrow-down.png"
            alt="arrow"
            className="arrow-icon"
          />
        </div>
      </div>
      <div className="rows">
        {rows.map((row, index) => (
          <TableRow key={index} {...row} />
        ))}
      </div>
    </div>
  );
};

export default Table;
